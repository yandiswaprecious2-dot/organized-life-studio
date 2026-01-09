import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// All $5 templates from all categories
const coreTemplates = [
  // Budgeting
  { id: 1, name: "Monthly Budget Planner Essential", description: "A comprehensive monthly planner to track income, expenses, and savings goals.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  { id: 2, name: "Income & Expense Planner Standard", description: "Balance your income against expenses with visual insights.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  { id: 3, name: "Debt Payoff Planner", description: "Strategic debt elimination with progress tracking.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  { id: 4, name: "Lifestyle Budget Planner", description: "Balance your lifestyle desires with smart budgeting.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  { id: 5, name: "Home Essentials Budget", description: "Plan and prioritize your home spending needs.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  { id: 6, name: "Event Planning Budget", description: "Birthdays, celebrations, and special moments planned perfectly.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  { id: 7, name: "Education & Skills Budget Planner", description: "Invest in your growth with planned learning expenses.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  { id: 8, name: "Financial Reset Planner", description: "Start fresh and rebuild your finances from the ground up.", price: 5, image: "/placeholder.svg", category: "Budgeting" },
  
  // Daily Planning
  { id: 9, name: "Daily Planner Productivity", description: "Maximize your daily output with structured productivity planning.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 10, name: "Daily Planner Priority Focus", description: "Focus on what matters most each day.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 11, name: "Weekly Planner Habits & Tasks", description: "Track habits and tasks across your entire week.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 12, name: "Weekly Planner Time Blocking", description: "Master time blocking for maximum weekly productivity.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 13, name: "Weekly Planner Productivity", description: "Optimize your week for peak performance.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 14, name: "Weekly Planner Balance", description: "Find weekly balance between all areas of life.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 15, name: "Weekly Planner Focused Week", description: "Maintain focus and clarity throughout the week.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 16, name: "Weekly Planner Reset", description: "Start each week fresh with intentional planning.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  { id: 17, name: "Monthly Habit Tracker", description: "Long-term habit tracking for consistent progress.", price: 5, image: "/placeholder.svg", category: "Daily Planning" },
  
  // Wellness
  { id: 18, name: "Self-Care Planner", description: "Prioritize your wellbeing with dedicated self-care scheduling.", price: 5, image: "/placeholder.svg", category: "Wellness" },
  { id: 19, name: "Wellness Goals Planner", description: "Set and achieve your health and wellness objectives.", price: 5, image: "/placeholder.svg", category: "Wellness" },
  { id: 20, name: "Fitness Workout Log", description: "Track your workouts, reps, and fitness progress over time.", price: 5, image: "/placeholder.svg", category: "Wellness" },
  { id: 21, name: "Mental Wellness Journal", description: "Nurture your mental health with guided journaling prompts.", price: 5, image: "/placeholder.svg", category: "Wellness" },
  { id: 22, name: "Nutrition & Meal Log", description: "Plan meals and track your nutrition for healthier eating.", price: 5, image: "/placeholder.svg", category: "Wellness" },
  { id: 23, name: "Stress Management Planner", description: "Identify stressors and plan effective coping strategies.", price: 5, image: "/placeholder.svg", category: "Wellness" },
  { id: 24, name: "Monthly Wellness Review", description: "Reflect on your wellness journey with monthly check-ins.", price: 5, image: "/placeholder.svg", category: "Wellness" },
  
  // Goal Setting
  { id: 25, name: "Vision Board Planner", description: "Visualize your dreams and create a roadmap to achieve them.", price: 5, image: "/placeholder.svg", category: "Goal Setting" },
  { id: 26, name: "Quarterly Goals Planner", description: "Break down yearly goals into actionable quarterly targets.", price: 5, image: "/placeholder.svg", category: "Goal Setting" },
  { id: 27, name: "Goal Breakdown Planner", description: "Transform big goals into manageable action steps.", price: 5, image: "/placeholder.svg", category: "Goal Setting" },
  { id: 28, name: "Goal Clarity Planner", description: "Get crystal clear on what you truly want to achieve.", price: 5, image: "/placeholder.svg", category: "Goal Setting" },
  { id: 29, name: "Focus & Alignment Planner", description: "Align daily actions with your bigger vision.", price: 5, image: "/placeholder.svg", category: "Goal Setting" },
  { id: 30, name: "Goal Reset Planner", description: "Reassess and realign when goals need adjustment.", price: 5, image: "/placeholder.svg", category: "Goal Setting" },
  
  // Students
  { id: 31, name: "Academic Planner Semester Overview", description: "Plan your entire semester with course schedules, deadlines, and key dates.", price: 5, image: "/placeholder.svg", category: "Students" },
  { id: 32, name: "Exam Preparation Planner", description: "Strategic exam prep with topic breakdowns and study milestones.", price: 5, image: "/placeholder.svg", category: "Students" },
  { id: 33, name: "Lecture Notes Organizer", description: "Structure and organize your lecture notes by subject and date.", price: 5, image: "/placeholder.svg", category: "Students" },
  { id: 34, name: "Productivity Study Planner", description: "Maximize your study efficiency with productivity-focused planning tools.", price: 5, image: "/placeholder.svg", category: "Students" },
  { id: 35, name: "GPA & Progress Tracker", description: "Monitor your grades and academic progress throughout the year.", price: 5, image: "/placeholder.svg", category: "Students" },
  { id: 36, name: "Study & Self-Care Balance Planner", description: "Balance academic demands with personal wellbeing and rest.", price: 5, image: "/placeholder.svg", category: "Students" },
  
  // Professionals
  { id: 37, name: "Project Timeline Planner", description: "Visualize project milestones and deadlines with timeline planning.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  { id: 38, name: "Task & Priority Manager", description: "Organize tasks by priority and manage your workload effectively.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  { id: 39, name: "Client Meeting Notes", description: "Professional client meeting documentation with agenda and outcomes.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  { id: 40, name: "Professional Goals Planner", description: "Set and achieve your career goals with strategic planning.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  { id: 41, name: "Performance Review Tracker", description: "Prepare for reviews with documented achievements and feedback.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  { id: 42, name: "OKR Planning Template", description: "Set and track Objectives and Key Results for quarterly planning.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  { id: 43, name: "Work Productivity Dashboard", description: "Monitor your productivity metrics and optimize your work habits.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  { id: 44, name: "Time Blocking Work Planner", description: "Master time blocking with dedicated focus periods for deep work.", price: 5, image: "/placeholder.svg", category: "Professionals" },
  
  // Traders
  { id: 45, name: "Trade Entry & Exit Tracker", description: "Track every trade with detailed entry and exit analysis.", price: 5, image: "/placeholder.svg", category: "Traders" },
  { id: 46, name: "Market Analysis Journal", description: "Record your market analysis, predictions, and outcomes.", price: 5, image: "/placeholder.svg", category: "Traders" },
  { id: 47, name: "Portfolio Overview Tracker", description: "Get a comprehensive view of your entire investment portfolio.", price: 5, image: "/placeholder.svg", category: "Traders" },
  { id: 48, name: "Asset Allocation Planner", description: "Plan and balance your asset allocation for optimal diversification.", price: 5, image: "/placeholder.svg", category: "Traders" },
  { id: 49, name: "Investment Performance Tracker", description: "Monitor the performance of your investments over time.", price: 5, image: "/placeholder.svg", category: "Traders" },
  { id: 50, name: "Profit & Loss Log", description: "Track your trading profits and losses with detailed breakdowns.", price: 5, image: "/placeholder.svg", category: "Traders" },
  
  // Marketers
  { id: 51, name: "Content Calendar Planner", description: "Plan and organize your content across all platforms with ease.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 52, name: "Social Media Planner", description: "Schedule and strategize your social media posts for maximum impact.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 53, name: "Brand Content Planner", description: "Keep your brand messaging consistent across all content.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 54, name: "Engagement & Growth Tracker", description: "Monitor your audience growth and engagement metrics.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 55, name: "Analytics & Insights Tracker", description: "Track key performance indicators and derive actionable insights.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 56, name: "Email Marketing Planner", description: "Organize your email campaigns and track open rates.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 57, name: "Influencer Campaign Tracker", description: "Manage influencer partnerships and track campaign results.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 58, name: "Ads Performance Tracker", description: "Monitor ad spend and performance across platforms.", price: 5, image: "/placeholder.svg", category: "Marketers" },
  { id: 59, name: "Marketing Review & Optimization Planner", description: "Review campaigns and identify areas for improvement.", price: 5, image: "/placeholder.svg", category: "Marketers" },
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

const CoreTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Core Templates ($5) | Organized Life</title>
        <meta
          name="description"
          content="Core templates at $5 - our most popular choice for productivity. Get 2-3 related templates with matching aesthetic design."
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
                Core Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Core Templates
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                Most popular choice at <span className="text-primary font-semibold">$5</span> each
              </p>
              <p className="text-muted-foreground">
                {coreTemplates.length} templates • 2-3 related templates • Matching design • Instant download
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {coreTemplates.map((template) => (
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

export default CoreTemplates;
