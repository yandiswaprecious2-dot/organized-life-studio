import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// All $4 templates from all categories
const essentialTemplates = [
  // Budgeting
  { id: 1, name: "Monthly Budget Planner Minimal", description: "Clean, distraction-free layout for simple monthly budgeting.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 2, name: "Monthly Budget Planner Neutral", description: "Elegant neutral tones for a calm budgeting experience.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 3, name: "Expense Tracker Classic", description: "Traditional expense tracking with categories and summaries.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 4, name: "Bills & Subscriptions Planner", description: "Never miss a payment with organized bill tracking.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 5, name: "Savings Goal Planner", description: "Set and achieve your savings milestones step by step.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 6, name: "Emergency Fund Planner", description: "Build your financial safety net with guided planning.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 7, name: "Self-Care & Wellness Budget", description: "Invest in yourself without breaking the bank.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 8, name: "Clothing & Personal Style Budget", description: "Curate your wardrobe with intentional spending.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  { id: 9, name: "Car & Transport Budget Planner", description: "Manage vehicle costs, fuel, and maintenance expenses.", price: 4, image: "/placeholder.svg", category: "Budgeting" },
  
  // Daily Planning
  { id: 10, name: "Daily Planner Habits & Tasks", description: "Combine habit tracking with daily task management.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 11, name: "Daily Planner Focus & Flow", description: "Design your day for deep focus and productive flow states.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 12, name: "Daily Planner Intentional Day", description: "Plan each day with purpose and clear intentions.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 13, name: "Daily Planner Balanced Day", description: "Create harmony between work, rest, and personal time.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 14, name: "Daily Planner Structured", description: "A clean, organized approach to planning your day.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 15, name: "Daily Planner Minimal", description: "Simple and elegant daily planning without the clutter.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 16, name: "Daily Habit Tracker", description: "Simple daily tracking for building lasting habits.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 17, name: "Weekly Habit Tracker", description: "Monitor your habit streaks across the week.", price: 4, image: "/placeholder.svg", category: "Daily Planning" },
  
  // Wellness
  { id: 18, name: "Daily Habit Tracker", description: "Build positive habits with daily tracking and progress monitoring.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  { id: 19, name: "Weekly Habit Planner", description: "Plan and track your habits across the entire week.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  { id: 20, name: "Morning Routine Planner", description: "Create a powerful morning routine that sets your day up for success.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  { id: 21, name: "Evening Routine Planner", description: "Wind down with intention using this calming evening planner.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  { id: 22, name: "Movement & Activity Tracker", description: "Monitor daily movement and stay active throughout the week.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  { id: 23, name: "Mood Tracker", description: "Understand your emotional patterns with daily mood logging.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  { id: 24, name: "Sleep Tracker", description: "Improve your sleep quality by tracking patterns and habits.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  { id: 25, name: "Hydration Tracker", description: "Stay hydrated with daily water intake monitoring.", price: 4, image: "/placeholder.svg", category: "Wellness" },
  
  // Goal Setting
  { id: 26, name: "Milestone Tracker", description: "Celebrate progress by tracking key milestones.", price: 4, image: "/placeholder.svg", category: "Goal Setting" },
  { id: 27, name: "Goal Progress Tracker", description: "Monitor your advancement toward every goal.", price: 4, image: "/placeholder.svg", category: "Goal Setting" },
  
  // Students
  { id: 28, name: "Weekly Study Planner", description: "Organize your weekly study sessions with time blocks and subject priorities.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 29, name: "Daily Study Schedule", description: "Structure each day for maximum productivity with hourly planning slots.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 30, name: "Assignment Tracker", description: "Never miss a deadline with organized assignment tracking and status updates.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 31, name: "Revision Timetable", description: "Create effective revision schedules with spaced repetition planning.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 32, name: "Study Goals Planner", description: "Set and track academic goals with actionable steps and progress monitoring.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 33, name: "Coursework Deadline Tracker", description: "Keep all your coursework deadlines organized in one central place.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 34, name: "Reading List & Study Log", description: "Track your required readings and log your study progress.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 35, name: "Exam Countdown Planner", description: "Count down to exam day with daily tasks and preparation checkpoints.", price: 4, image: "/placeholder.svg", category: "Students" },
  { id: 36, name: "End-of-Term Review Planner", description: "Reflect on your term, assess your performance, and plan for improvement.", price: 4, image: "/placeholder.svg", category: "Students" },
  
  // Professionals
  { id: 37, name: "Weekly Work Planner", description: "Plan your work week with structured daily goals and priorities.", price: 4, image: "/placeholder.svg", category: "Professionals" },
  { id: 38, name: "Daily Work Schedule", description: "Structure your workday hour by hour for maximum productivity.", price: 4, image: "/placeholder.svg", category: "Professionals" },
  { id: 39, name: "Meeting Notes Planner", description: "Capture meeting notes, action items, and follow-ups in one place.", price: 4, image: "/placeholder.svg", category: "Professionals" },
  { id: 40, name: "Action Items Tracker", description: "Track and manage action items across all your projects and meetings.", price: 4, image: "/placeholder.svg", category: "Professionals" },
  { id: 41, name: "Decision Log & Notes", description: "Document important decisions with context and reasoning.", price: 4, image: "/placeholder.svg", category: "Professionals" },
  { id: 42, name: "End-of-Week Work Review", description: "Reflect on your week, celebrate wins, and plan for improvement.", price: 4, image: "/placeholder.svg", category: "Professionals" },
  
  // Traders
  { id: 43, name: "Trade Review & Reflection", description: "Analyze past trades to improve your future performance.", price: 4, image: "/placeholder.svg", category: "Traders" },
  { id: 44, name: "Economic Events Tracker", description: "Stay ahead of market-moving economic events and announcements.", price: 4, image: "/placeholder.svg", category: "Traders" },
  
  // Marketers
  { id: 45, name: "Monthly Content Overview", description: "Get a bird's eye view of your monthly content schedule.", price: 4, image: "/placeholder.svg", category: "Marketers" },
  { id: 46, name: "Posting Schedule Planner", description: "Optimize your posting times for better engagement.", price: 4, image: "/placeholder.svg", category: "Marketers" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
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

const EssentialTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Essential Templates ($4) | Organized Life</title>
        <meta
          name="description"
          content="Essential templates starting at just $4. Perfect for trying out specific planners with instant download and lifetime access."
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
              <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
                Essential Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Essential Templates
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                Perfect single templates at just <span className="text-primary font-semibold">$4</span> each
              </p>
              <p className="text-muted-foreground">
                {essentialTemplates.length} templates • Instant download • Lifetime access • Free updates
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {essentialTemplates.map((template) => (
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
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                        {template.category}
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

export default EssentialTemplates;
