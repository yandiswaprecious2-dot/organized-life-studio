import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

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
        subject: `New Template Order Request: ${templateName}`,
        html: `
          <h2>New Template Order Request</h2>
          <p><strong>Template:</strong> ${templateName}</p>
          <p><strong>Customer Email:</strong> ${email}</p>
          ${note ? `<p><strong>Note:</strong> ${note}</p>` : ''}
          <hr>
          <p style="color: #666; font-size: 12px;">This request was submitted through the Organized Life website.</p>
        `,
      }),
    });

    if (!ownerEmailRes.ok) {
      const error = await ownerEmailRes.text();
      throw new Error(`Failed to send owner email: ${error}`);
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
        subject: `Order Request Received: ${templateName}`,
        html: `
          <h2>Thank you for your interest!</h2>
          <p>We've received your request for the <strong>${templateName}</strong> template.</p>
          <p>Our team will review your request and get back to you shortly with payment details and access instructions.</p>
          ${note ? `<p><strong>Your note:</strong> ${note}</p>` : ''}
          <hr>
          <p style="color: #666; font-size: 12px;">Best regards,<br>The Organized Life Team</p>
        `,
      }),
    });

    if (!customerEmailRes.ok) {
      console.error("Customer confirmation email failed but owner was notified");
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
