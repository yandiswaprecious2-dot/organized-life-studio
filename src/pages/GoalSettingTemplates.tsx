import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const goalSettingTemplates = [
  { id: 1, name: "Vision Board Planner", description: "Visualize your dreams and create a roadmap to achieve them.", price: 5, image: "/placeholder.svg" },
  { id: 2, name: "Life Goals Planner", description: "Map out your biggest life goals across all areas.", price: 6, image: "/placeholder.svg" },
  { id: 3, name: "Annual Goals Planner", description: "Set and track meaningful goals for the entire year.", price: 6, image: "/placeholder.svg" },
  { id: 4, name: "Quarterly Goals Planner", description: "Break down yearly goals into actionable quarterly targets.", price: 5, image: "/placeholder.svg" },
  { id: 5, name: "Goal Breakdown Planner", description: "Transform big goals into manageable action steps.", price: 5, image: "/placeholder.svg" },
  { id: 6, name: "Milestone Tracker", description: "Celebrate progress by tracking key milestones.", price: 4, image: "/placeholder.svg" },
  { id: 7, name: "Goal Progress Tracker", description: "Monitor your advancement toward every goal.", price: 4, image: "/placeholder.svg" },
  { id: 8, name: "Goal Clarity Planner", description: "Get crystal clear on what you truly want to achieve.", price: 5, image: "/placeholder.svg" },
  { id: 9, name: "Focus & Alignment Planner", description: "Align daily actions with your bigger vision.", price: 5, image: "/placeholder.svg" },
  { id: 10, name: "Goal Reset Planner", description: "Reassess and realign when goals need adjustment.", price: 5, image: "/placeholder.svg" },
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

const GoalSettingTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Goal Setting Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium goal setting templates for vision boards, life goals, quarterly planning, and milestone tracking. Starting at just $4."
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
                Goal Setting Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Goal Setting Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Turn your dreams into reality with goal-setting templates designed to help you 
                plan, track, and achieve.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {goalSettingTemplates.map((template) => (
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

export default GoalSettingTemplates;