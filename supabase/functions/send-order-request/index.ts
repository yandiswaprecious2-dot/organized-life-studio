import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const normalizeResendApiKey = (raw?: string | null) => {
  let key = (raw ?? "").trim();
  // Users sometimes paste `Bearer <key>`; Resend expects the raw key only.
  key = key.replace(/^Bearer\s+/i, "");
  // Remove accidental wrapping quotes.
  key = key.replace(/^['\"]|['\"]$/g, "");
  // Remove any whitespace/newlines that can sneak in during copy/paste.
  key = key.replace(/\s+/g, "");
  return key;
};

const getResendApiKey = () => normalizeResendApiKey(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrderRequestPayload {
  email: string;
  templateName: string;
  note?: string;
}

const OWNER_EMAIL = "yandiswaprecious2@gmail.com";

// Simple in-memory rate limiting (per IP, 5 requests per hour)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count };
}

// HTML escape function to prevent XSS in email content
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}


const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Read secret at request time (also forces a fresh boot to pick up secret updates).
    const RESEND_API_KEY = getResendApiKey();

    // Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
                     req.headers.get("x-real-ip") ||
                     "unknown";
    const { allowed, remaining } = checkRateLimit(clientIp);

    if (!allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json",
            "X-RateLimit-Remaining": "0",
            ...corsHeaders 
          },
        }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({
          error: "Email service is temporarily unavailable. Please try again later.",
        }),
        {
          status: 503,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { email, templateName, note }: OrderRequestPayload = await req.json();

    // Validate required fields
    if (!email || !templateName) {
      return new Response(
        JSON.stringify({ error: "Email and template name are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Additional server-side validation: max lengths
    if (templateName.length > 200) {
      return new Response(JSON.stringify({ error: "Template name too long" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (note && note.length > 1000) {
      return new Response(JSON.stringify({ error: "Note too long" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Escape user inputs to prevent XSS in emails
    const safeTemplateName = escapeHtml(templateName);
    const safeEmail = escapeHtml(email);
    const safeNote = note ? escapeHtml(note) : null;

    // Send email to owner
    const ownerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Organized Life <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: `New Template Order Request: ${safeTemplateName}`,
        html: `
          <h2>New Template Order Request</h2>
          <p><strong>Template:</strong> ${safeTemplateName}</p>
          <p><strong>Customer Email:</strong> ${safeEmail}</p>
          ${safeNote ? `<p><strong>Note:</strong> ${safeNote}</p>` : ""}
          <hr>
          <p style="color: #666; font-size: 12px;">This request was submitted through the Organized Life website.</p>
        `,
      }),
    });

    if (!ownerEmailRes.ok) {
      const errorText = await ownerEmailRes.text();
      console.error("Resend API error:", errorText, { status: ownerEmailRes.status });

      return new Response(
        JSON.stringify({
          error: "Failed to send email. Please try again or contact support.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to customer
    const customerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Organized Life <onboarding@resend.dev>",
        to: [email],
        subject: `Order Request Received: ${safeTemplateName}`,
        html: `
          <h2>Thank you for your interest!</h2>
          <p>We've received your request for the <strong>${safeTemplateName}</strong> template.</p>
          <p>Our team will review your request and get back to you shortly with payment details and access instructions.</p>
          ${safeNote ? `<p><strong>Your note:</strong> ${safeNote}</p>` : ""}
          <hr>
          <p style="color: #666; font-size: 12px;">Best regards,<br>The Organized Life Team</p>
        `,
      }),
    });

    if (!customerEmailRes.ok) {
      console.error(
        "Customer confirmation email failed but owner was notified:",
        await customerEmailRes.text()
      );
    }

    console.log("Order request emails sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Order request sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-order-request function:", error);
    return new Response(
      JSON.stringify({
        error: "Unable to process your request. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
