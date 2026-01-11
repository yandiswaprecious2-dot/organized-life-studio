import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const budgetingTemplates = [
  {
    id: 1,
    name: "Monthly Budget Planner Essential",
    description: "A comprehensive monthly planner to track income, expenses, and savings goals.",
    price: 5,
    image: "/placeholder.svg",
    slug: "monthly-budget-planner-essential",
  },
  {
    id: 2,
    name: "Monthly Budget Planner Minimal",
    description: "Clean, distraction-free layout for simple monthly budgeting.",
    price: 4,
    image: "/placeholder.svg",
    slug: "monthly-budget-planner-minimal",
  },
  {
    id: 3,
    name: "Monthly Budget Planner Neutral",
    description: "Elegant neutral tones for a calm budgeting experience.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Expense Tracker Classic",
    description: "Traditional expense tracking with categories and summaries.",
    price: 4,
    image: "/placeholder.svg",
    slug: "expense-tracker-classic",
  },
  {
    id: 5,
    name: "Income & Expense Planner Standard",
    description: "Balance your income against expenses with visual insights.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Bills & Subscriptions Planner",
    description: "Never miss a payment with organized bill tracking.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Debt Payoff Planner",
    description: "Strategic debt elimination with progress tracking.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Savings Goal Planner",
    description: "Set and achieve your savings milestones step by step.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Emergency Fund Planner",
    description: "Build your financial safety net with guided planning.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Lifestyle Budget Planner",
    description: "Balance your lifestyle desires with smart budgeting.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "Self-Care & Wellness Budget",
    description: "Invest in yourself without breaking the bank.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 12,
    name: "Clothing & Personal Style Budget",
    description: "Curate your wardrobe with intentional spending.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 13,
    name: "Home Essentials Budget",
    description: "Plan and prioritize your home spending needs.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 14,
    name: "Travel & Holiday Budget Planner",
    description: "Dream trips made possible with smart budgeting.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 15,
    name: "Event Planning Budget",
    description: "Birthdays, celebrations, and special moments planned perfectly.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 16,
    name: "Car & Transport Budget Planner",
    description: "Manage vehicle costs, fuel, and maintenance expenses.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 17,
    name: "Education & Skills Budget Planner",
    description: "Invest in your growth with planned learning expenses.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 18,
    name: "Small Business Starter Budget",
    description: "Launch your business with organized financial planning.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 19,
    name: "Annual Budget Overview",
    description: "See the big picture with yearly financial planning.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 20,
    name: "Financial Reset Planner",
    description: "Start fresh and rebuild your finances from the ground up.",
    price: 5,
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

const BudgetingTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Budgeting Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium budgeting templates for expense tracking, savings goals, debt payoff, and financial planning. Starting at just $4."
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
                Budgeting Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Budgeting Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Take control of your finances with beautifully designed budget planners, 
                expense trackers, and savings tools.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {budgetingTemplates.map((template) => {
                const TemplateCard = (
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
                );

                return template.slug ? (
                  <Link key={template.id} to={`/templates/budgeting/${template.slug}`}>
                    {TemplateCard}
                  </Link>
                ) : (
                  TemplateCard
                );
              })}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BudgetingTemplates;
