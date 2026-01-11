import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/G5P6YJS2WZETL";

const features = [
  "1 dedicated monthly sheet for focused tracking",
  "Income, expenses, bills, and debt tracking",
  "Transaction log for detailed record-keeping",
  "Savings goals with visual progress indicators",
  "Summary dashboard with pie charts and bar graphs",
  "Clean, professional design for easy navigation",
];

const MonthlyBudgetPlannerNeutral = () => {
  const handleGetAccess = () => {
    window.open(PAYPAL_LINK, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Monthly Budget Planner Neutral | Organized Life</title>
        <meta
          name="description"
          content="A thoughtfully designed budgeting template with a clean, distraction-free layout for managing monthly finances with ease and clarity."
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-elevated bg-card flex items-center justify-center">
                  <div className="text-muted-foreground text-center p-8">
                    <p className="text-lg font-medium">Preview Image</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
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
                    Monthly Budget Planner Neutral
                  </h1>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-semibold text-primary">$4</span>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      Instant Access
                    </span>
                  </div>
                </div>

                <div className="prose prose-muted max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A thoughtfully designed budgeting template for those who prefer 
                    simplicity and focus. The Neutral Budget Planner offers a clean, 
                    distraction-free layout that helps you manage your monthly finances 
                    with ease and clarity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for monthly planning, quick check-ins, or personal budgeting 
                    systems that don't require a full yearly setup.
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
                    Once your payment is complete, you'll receive instant access to the template. 
                    Simply click <strong>"Make a copy"</strong> to save it to your own Google Drive 
                    and start organizing your finances.
                  </p>
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

export default MonthlyBudgetPlannerNeutral;
