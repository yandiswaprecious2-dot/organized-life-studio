import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const marketersTemplates = [
  { id: 1, name: "Content Calendar Planner", description: "Plan and organize your content across all platforms with ease.", price: 5, image: "/placeholder.svg" },
  { id: 2, name: "Social Media Planner", description: "Schedule and strategize your social media posts for maximum impact.", price: 5, image: "/placeholder.svg" },
  { id: 3, name: "Campaign Planning Tracker", description: "Track every detail of your marketing campaigns from start to finish.", price: 6, image: "/placeholder.svg" },
  { id: 4, name: "Marketing Strategy Planner", description: "Develop comprehensive marketing strategies aligned with your goals.", price: 6, image: "/placeholder.svg" },
  { id: 5, name: "Brand Content Planner", description: "Keep your brand messaging consistent across all content.", price: 5, image: "/placeholder.svg" },
  { id: 6, name: "Monthly Content Overview", description: "Get a bird's eye view of your monthly content schedule.", price: 4, image: "/placeholder.svg" },
  { id: 7, name: "Posting Schedule Planner", description: "Optimize your posting times for better engagement.", price: 4, image: "/placeholder.svg" },
  { id: 8, name: "Engagement & Growth Tracker", description: "Monitor your audience growth and engagement metrics.", price: 5, image: "/placeholder.svg" },
  { id: 9, name: "Analytics & Insights Tracker", description: "Track key performance indicators and derive actionable insights.", price: 5, image: "/placeholder.svg" },
  { id: 10, name: "Launch Campaign Planner", description: "Plan successful product or service launches step by step.", price: 6, image: "/placeholder.svg" },
  { id: 11, name: "Email Marketing Planner", description: "Organize your email campaigns and track open rates.", price: 5, image: "/placeholder.svg" },
  { id: 12, name: "Influencer Campaign Tracker", description: "Manage influencer partnerships and track campaign results.", price: 5, image: "/placeholder.svg" },
  { id: 13, name: "Ads Performance Tracker", description: "Monitor ad spend and performance across platforms.", price: 5, image: "/placeholder.svg" },
  { id: 14, name: "Marketing Review & Optimization Planner", description: "Review campaigns and identify areas for improvement.", price: 5, image: "/placeholder.svg" },
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

const MarketersTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Marketers Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium marketing templates for content calendars, social media planning, campaign tracking, and analytics. Starting at just $4."
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
                Marketers Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Marketers Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Supercharge your marketing efforts with templates designed for content creators 
                and marketing professionals.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {marketersTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
                >
                  {/* Template Preview Image */}
                  <div className="aspect-[4/3] bg-muted/50 relative overflow-hidden">
                    <img
                      src={template.image}
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

export default MarketersTemplates;