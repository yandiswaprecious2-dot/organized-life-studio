import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import RequestOrderModal from "@/components/RequestOrderModal";
import { isTemplatePurchasable, getTemplateImage } from "@/data/templateImages";

const tradersTemplates = [
  {
    id: 1,
    name: "Trading Journal Daily Log",
    description: "Document your daily trades with entry, exit, and performance notes.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Trade Entry & Exit Tracker",
    description: "Track every trade with detailed entry and exit analysis.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Market Analysis Journal",
    description: "Record your market analysis, predictions, and outcomes.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Risk Management Planner",
    description: "Plan and monitor your risk exposure across all positions.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Trading Strategy Planner",
    description: "Document and refine your trading strategies with structured planning.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Portfolio Overview Tracker",
    description: "Get a comprehensive view of your entire investment portfolio.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Asset Allocation Planner",
    description: "Plan and balance your asset allocation for optimal diversification.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Investment Performance Tracker",
    description: "Monitor the performance of your investments over time.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Profit & Loss Log",
    description: "Track your trading profits and losses with detailed breakdowns.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Trade Review & Reflection",
    description: "Analyze past trades to improve your future performance.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "Economic Events Tracker",
    description: "Stay ahead of market-moving economic events and announcements.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 12,
    name: "Long-Term Investment Planner",
    description: "Plan your long-term investment strategy with goal-based tracking.",
    price: 6,
    image: "/placeholder.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const TradersTemplates = () => {
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [selectedTemplateName, setSelectedTemplateName] = useState("");

  const handleRequestOrder = (templateName: string) => {
    setSelectedTemplateName(templateName);
    setRequestModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Traders & Investors Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium trading templates for journals, portfolio tracking, risk management, and investment planning. Starting at just $4."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Back Link */}
            <Link
              to="/#templates"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Categories</span>
            </Link>

            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
                Traders & Investors Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Traders & Investors Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Master the markets with professional trading journals, portfolio trackers, 
                and investment planning tools.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {tradersTemplates.map((template) => {
                const slug = template.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                const isPurchasable = isTemplatePurchasable(slug);
                const previewImage = getTemplateImage(slug);
                
                return (
                  <motion.div
                    key={template.id}
                    variants={itemVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
                  >
                    {/* Template Preview Image */}
                    <div className="aspect-[4/3] bg-muted/50 relative overflow-hidden">
                      <img
                        src={previewImage || template.image}
                        alt={template.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Template Info */}
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {template.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold text-primary">
                          ${template.price}
                        </span>
                        {isPurchasable ? (
                          <Button size="sm" className="gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            Get Access
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="gap-2"
                            onClick={() => handleRequestOrder(template.name)}
                          >
                            <Send className="w-4 h-4" />
                            Request Order
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>

      <RequestOrderModal
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
        templateName={selectedTemplateName}
      />
    </>
  );
};

export default TradersTemplates;
