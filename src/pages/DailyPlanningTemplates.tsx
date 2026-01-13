import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import RequestOrderModal from "@/components/RequestOrderModal";

const dailyPlanningTemplates = [
  { id: 1, name: "Daily Planner Habits & Tasks", description: "Combine habit tracking with daily task management.", price: 4, image: "/placeholder.svg" },
  { id: 2, name: "Daily Planner Focus & Flow", description: "Design your day for deep focus and productive flow states.", price: 4, image: "/placeholder.svg" },
  { id: 3, name: "Daily Planner Intentional Day", description: "Plan each day with purpose and clear intentions.", price: 4, image: "/placeholder.svg" },
  { id: 4, name: "Daily Planner Productivity", description: "Maximize your daily output with structured productivity planning.", price: 5, image: "/placeholder.svg" },
  { id: 5, name: "Daily Planner Balanced Day", description: "Create harmony between work, rest, and personal time.", price: 4, image: "/placeholder.svg" },
  { id: 6, name: "Daily Planner Structured", description: "A clean, organized approach to planning your day.", price: 4, image: "/placeholder.svg" },
  { id: 7, name: "Daily Planner Minimal", description: "Simple and elegant daily planning without the clutter.", price: 4, image: "/placeholder.svg" },
  { id: 8, name: "Daily Planner Priority Focus", description: "Focus on what matters most each day.", price: 5, image: "/placeholder.svg" },
  { id: 9, name: "Weekly Planner Habits & Tasks", description: "Track habits and tasks across your entire week.", price: 5, image: "/placeholder.svg" },
  { id: 10, name: "Weekly Planner Time Blocking", description: "Master time blocking for maximum weekly productivity.", price: 5, image: "/placeholder.svg" },
  { id: 11, name: "Weekly Planner Productivity", description: "Optimize your week for peak performance.", price: 5, image: "/placeholder.svg" },
  { id: 12, name: "Weekly Planner Balance", description: "Find weekly balance between all areas of life.", price: 5, image: "/placeholder.svg" },
  { id: 13, name: "Weekly Planner Focused Week", description: "Maintain focus and clarity throughout the week.", price: 5, image: "/placeholder.svg" },
  { id: 14, name: "Weekly Planner Reset", description: "Start each week fresh with intentional planning.", price: 5, image: "/placeholder.svg" },
  { id: 15, name: "Monthly Planner Habits & Goals", description: "Align your monthly habits with bigger goals.", price: 6, image: "/placeholder.svg" },
  { id: 16, name: "Monthly Planner Productivity", description: "Plan your most productive month ever.", price: 6, image: "/placeholder.svg" },
  { id: 17, name: "Monthly Planner Intentional Living", description: "Design a month aligned with your values and vision.", price: 6, image: "/placeholder.svg" },
  { id: 18, name: "Monthly Planner Reset & Review", description: "Reflect, reset, and plan for the month ahead.", price: 6, image: "/placeholder.svg" },
  { id: 19, name: "Monthly Planner Goal Focus", description: "Keep monthly goals front and center.", price: 6, image: "/placeholder.svg" },
  { id: 20, name: "Daily Habit Tracker", description: "Simple daily tracking for building lasting habits.", price: 4, image: "/placeholder.svg" },
  { id: 21, name: "Weekly Habit Tracker", description: "Monitor your habit streaks across the week.", price: 4, image: "/placeholder.svg" },
  { id: 22, name: "Monthly Habit Tracker", description: "Long-term habit tracking for consistent progress.", price: 5, image: "/placeholder.svg" },
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

const DailyPlanningTemplates = () => {
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [selectedTemplateName, setSelectedTemplateName] = useState("");

  const handleRequestOrder = (templateName: string) => {
    setSelectedTemplateName(templateName);
    setRequestModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Daily Planning Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium daily, weekly, and monthly planning templates for productivity, habits, and intentional living. Starting at just $4."
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
                Daily Planning Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Daily Planning Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Master your days, weeks, and months with our comprehensive planning templates 
                for every productivity style.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {dailyPlanningTemplates.map((template) => (
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
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-2"
                        onClick={() => handleRequestOrder(template.name)}
                      >
                        <Send className="w-4 h-4" />
                        Request Order
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

      <RequestOrderModal
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
        templateName={selectedTemplateName}
      />
    </>
  );
};

export default DailyPlanningTemplates;
