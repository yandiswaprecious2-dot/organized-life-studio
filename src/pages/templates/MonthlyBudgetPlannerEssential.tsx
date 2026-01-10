import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import previewImage from "@/assets/templates/monthly-budget-planner-essential.png";

const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/XZS6CYT7J93NG";
const GOOGLE_SHEET_LINK = "https://docs.google.com/spreadsheets/d/1pE2EZjl0EIq-DxLsRs4ivfgcQWxYLcAAYRtC7aq2yf0/edit?usp=sharing";

const features = [
  "12 dedicated monthly sheets for year-round tracking",
  "Income, expenses, bills, and debt tracking",
  "Savings goals with visual progress indicators",
  "Summary dashboard with pie charts and bar graphs",
  "Transaction log for detailed record-keeping",
  "Clean, professional design for easy navigation",
];

const MonthlyBudgetPlannerEssential = () => {
  const handleGetAccess = () => {
    // Open PayPal in new tab, then redirect to Google Sheet
    window.open(PAYPAL_LINK, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Monthly Budget Planner Essential | Organized Life</title>
        <meta
          name="description"
          content="A comprehensive monthly budget planner with 12 dedicated sheets to track income, expenses, bills, debts, and savings goals throughout the year."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Back Link */}
            <Link
              to="/templates/budgeting"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Budgeting Templates</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Product Preview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-elevated bg-card">
                  <img
                    src={previewImage}
                    alt="Monthly Budget Planner Essential Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-sm font-medium uppercase tracking-widest text-primary mb-2 block">
                    Budgeting Collection
                  </span>
                  <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                    Monthly Budget Planner Essential
                  </h1>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-semibold text-primary">$5</span>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      Instant Access
                    </span>
                  </div>
                </div>

                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A beautifully crafted budget planner designed to bring clarity and intention 
                    to your financial journey. This Essential edition features twelve dedicated 
                    monthly sheets, empowering you to thoughtfully track income, manage expenses, 
                    monitor bills and debts, and nurture your savings goals—all within one 
                    elegantly organized system.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for individuals seeking a complete, ready-to-use budgeting solution 
                    that transforms financial management into a calm, purposeful practice.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-4">
                  <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="gap-2 flex-1"
                    onClick={handleGetAccess}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Get Access via PayPal
                  </Button>
                </div>

                {/* Post-Payment Note */}
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4 mt-6">
                  <h4 className="font-medium text-sm mb-2">After Payment</h4>
                  <p className="text-sm text-muted-foreground">
                    Once your payment is complete, you'll receive instant access to the Google Sheet. 
                    Simply click <strong>"Make a copy"</strong> to save it to your own Google Drive 
                    and start organizing your finances.
                  </p>
                  <a
                    href={GOOGLE_SHEET_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm mt-3"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Access Template (after payment)
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MonthlyBudgetPlannerEssential;
