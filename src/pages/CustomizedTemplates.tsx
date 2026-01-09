import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const customizedTemplates = [
  {
    id: 1,
    name: "Travel & Holiday Budget Planner",
    description: "Dream trips made possible with smart budgeting.",
    price: 6,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 2,
    name: "Small Business Starter Budget",
    description: "Launch your business with organized financial planning.",
    price: 6,
    image: "/placeholder.svg",
    category: "Professionals",
  },
  {
    id: 3,
    name: "Annual Budget Overview",
    description: "See the big picture with yearly financial planning.",
    price: 6,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 4,
    name: "Complete Productivity Suite",
    description: "Full collection of daily, weekly, and monthly planners.",
    price: 6,
    image: "/placeholder.svg",
    category: "Daily Planning",
  },
  {
    id: 5,
    name: "Ultimate Goal Achievement Bundle",
    description: "Comprehensive goal setting with vision boards and trackers.",
    price: 6,
    image: "/placeholder.svg",
    category: "Goal Setting",
  },
  {
    id: 6,
    name: "Professional Portfolio Bundle",
    description: "Complete professional templates for career growth.",
    price: 6,
    image: "/placeholder.svg",
    category: "Professionals",
  },
  {
    id: 7,
    name: "Trading & Investment Complete Kit",
    description: "Full suite of trading journals and analysis templates.",
    price: 6,
    image: "/placeholder.svg",
    category: "Traders",
  },
  {
    id: 8,
    name: "Marketing Campaign Bundle",
    description: "Complete marketing planning and tracking templates.",
    price: 6,
    image: "/placeholder.svg",
    category: "Marketers",
  },
  {
    id: 9,
    name: "Academic Year Complete Bundle",
    description: "Everything a student needs for the entire academic year.",
    price: 6,
    image: "/placeholder.svg",
    category: "Students",
  },
  {
    id: 10,
    name: "Holistic Wellness Collection",
    description: "Complete mind, body, and spirit tracking bundle.",
    price: 6,
    image: "/placeholder.svg",
    category: "Wellness",
  },
  {
    id: 11,
    name: "Life Planning Master Bundle",
    description: "Plan every aspect of your life with this comprehensive collection.",
    price: 6,
    image: "/placeholder.svg",
    category: "Goal Setting",
  },
  {
    id: 12,
    name: "Entrepreneur Starter Kit",
    description: "Launch and grow your business with strategic planning tools.",
    price: 6,
    image: "/placeholder.svg",
    category: "Professionals",
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

const CustomizedTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Customized Templates ($6) | Organized Life</title>
        <meta
          name="description"
          content="Premium customized bundles at $6 - Get 4-5 premium templates with full collection access and priority support."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Back Link */}
            <Link
              to="/#pricing"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Pricing</span>
            </Link>

            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Collection</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Customized Templates
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                Complete themed bundles at <span className="text-primary font-semibold">$6</span> each
              </p>
              <p className="text-muted-foreground">
                4-5 premium templates • Full collection access • Priority support
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {customizedTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-card rounded-xl border border-primary/20 overflow-hidden hover:border-primary/50 hover:shadow-elevated transition-all duration-300"
                >
                  {/* Template Preview Image */}
                  <div className="aspect-[4/3] bg-muted/50 relative overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {template.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full flex items-center gap-1">
                        <Crown className="w-3 h-3 text-primary" />
                        Premium
                      </span>
                    </div>
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
                      <Button size="sm" className="gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Get Access
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CustomizedTemplates;