import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const wellnessTemplates = [
  { id: 1, name: "Daily Habit Tracker", description: "Build positive habits with daily tracking and progress monitoring.", price: 4, image: "/placeholder.svg" },
  { id: 2, name: "Weekly Habit Planner", description: "Plan and track your habits across the entire week.", price: 4, image: "/placeholder.svg" },
  { id: 3, name: "Morning Routine Planner", description: "Create a powerful morning routine that sets your day up for success.", price: 4, image: "/placeholder.svg" },
  { id: 4, name: "Evening Routine Planner", description: "Wind down with intention using this calming evening planner.", price: 4, image: "/placeholder.svg" },
  { id: 5, name: "Self-Care Planner", description: "Prioritize your wellbeing with dedicated self-care scheduling.", price: 5, image: "/placeholder.svg" },
  { id: 6, name: "Wellness Goals Planner", description: "Set and achieve your health and wellness objectives.", price: 5, image: "/placeholder.svg" },
  { id: 7, name: "Fitness Workout Log", description: "Track your workouts, reps, and fitness progress over time.", price: 5, image: "/placeholder.svg" },
  { id: 8, name: "Movement & Activity Tracker", description: "Monitor daily movement and stay active throughout the week.", price: 4, image: "/placeholder.svg" },
  { id: 9, name: "Mental Wellness Journal", description: "Nurture your mental health with guided journaling prompts.", price: 5, image: "/placeholder.svg" },
  { id: 10, name: "Mood Tracker", description: "Understand your emotional patterns with daily mood logging.", price: 4, image: "/placeholder.svg" },
  { id: 11, name: "Sleep Tracker", description: "Improve your sleep quality by tracking patterns and habits.", price: 4, image: "/placeholder.svg" },
  { id: 12, name: "Nutrition & Meal Log", description: "Plan meals and track your nutrition for healthier eating.", price: 5, image: "/placeholder.svg" },
  { id: 13, name: "Hydration Tracker", description: "Stay hydrated with daily water intake monitoring.", price: 4, image: "/placeholder.svg" },
  { id: 14, name: "Stress Management Planner", description: "Identify stressors and plan effective coping strategies.", price: 5, image: "/placeholder.svg" },
  { id: 15, name: "Monthly Wellness Review", description: "Reflect on your wellness journey with monthly check-ins.", price: 5, image: "/placeholder.svg" },
  { id: 16, name: "Balance & Lifestyle Planner", description: "Create harmony between work, life, and personal wellness.", price: 6, image: "/placeholder.svg" },
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

const WellnessTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Wellness Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium wellness templates for habit tracking, self-care planning, fitness logs, and mental wellness. Starting at just $4."
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
                Wellness Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Wellness Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Nurture your mind, body, and soul with our comprehensive wellness templates 
                designed for holistic health.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {wellnessTemplates.map((template) => (
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

export default WellnessTemplates;