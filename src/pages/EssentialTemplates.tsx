import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const essentialTemplates = [
  {
    id: 1,
    name: "Monthly Budget Planner Minimal",
    description: "Clean, distraction-free layout for simple monthly budgeting.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 2,
    name: "Monthly Budget Planner Neutral",
    description: "Elegant neutral tones for a calm budgeting experience.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 3,
    name: "Expense Tracker Classic",
    description: "Traditional expense tracking with categories and summaries.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 4,
    name: "Bills & Subscriptions Planner",
    description: "Never miss a payment with organized bill tracking.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 5,
    name: "Savings Goal Planner",
    description: "Set and achieve your savings milestones step by step.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 6,
    name: "Emergency Fund Planner",
    description: "Build your financial safety net with guided planning.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 7,
    name: "Self-Care & Wellness Budget",
    description: "Invest in yourself without breaking the bank.",
    price: 4,
    image: "/placeholder.svg",
    category: "Wellness",
  },
  {
    id: 8,
    name: "Clothing & Personal Style Budget",
    description: "Curate your wardrobe with intentional spending.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 9,
    name: "Car & Transport Budget Planner",
    description: "Manage vehicle costs, fuel, and maintenance expenses.",
    price: 4,
    image: "/placeholder.svg",
    category: "Budgeting",
  },
  {
    id: 10,
    name: "Daily Planner Simple",
    description: "Straightforward daily planning for focused productivity.",
    price: 4,
    image: "/placeholder.svg",
    category: "Daily Planning",
  },
  {
    id: 11,
    name: "Weekly Overview Basic",
    description: "See your week at a glance with minimal design.",
    price: 4,
    image: "/placeholder.svg",
    category: "Daily Planning",
  },
  {
    id: 12,
    name: "Habit Tracker Starter",
    description: "Begin building positive habits with simple tracking.",
    price: 4,
    image: "/placeholder.svg",
    category: "Wellness",
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
                Instant download • Lifetime access • Free updates
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