import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Heart,
  Wallet,
  Calendar,
  Target,
  Users,
  Star,
  Zap,
  Crown,
} from "lucide-react";

const categories = [
  {
    icon: Wallet,
    title: "Budgeting",
    description: "Expense trackers, savings goals, and financial planners",
    count: 20,
    link: "/templates/budgeting",
  },
  {
    icon: Calendar,
    title: "Daily Planning",
    description: "Daily, weekly, and monthly planning templates",
    count: 22,
    link: "/templates/daily-planning",
  },
  {
    icon: Heart,
    title: "Wellness",
    description: "Habit trackers, workout logs, and self-care routines",
    count: 16,
    link: "/templates/wellness",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "Study planners, assignment trackers, and exam schedules",
    count: 15,
    link: "/templates/students",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Project management, meeting notes, and career goals",
    count: 18,
    link: "/templates/professionals",
  },
  {
    icon: TrendingUp,
    title: "Traders & Investors",
    description: "Trading journals, portfolio trackers, and analysis logs",
    count: 12,
    link: "/templates/traders",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Vision boards, goal trackers, and milestone planners",
    count: 10,
    link: "/templates/goal-setting",
  },
  {
    icon: Users,
    title: "Marketers",
    description: "Content calendars, campaign trackers, and analytics",
    count: 14,
    link: "/templates/marketers",
  },
];

const pricingTiers = [
  {
    name: "Essential",
    price: "$4",
    description: "Individual templates",
    icon: Star,
    link: "/pricing/essential",
  },
  {
    name: "Core",
    price: "$5",
    description: "2-3 related templates",
    icon: Zap,
    link: "/pricing/core",
  },
  {
    name: "Customized",
    price: "$6",
    description: "Full bundles",
    icon: Crown,
    link: "/pricing/customized",
    popular: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const BrowseTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Browse Templates | Organized Life</title>
        <meta
          name="description"
          content="Explore all premium templates for budgeting, planning, wellness, and productivity. Find the perfect template for your needs."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
                All Templates
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Browse Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover beautifully crafted templates for every aspect of your life. 
                Choose by category or browse by price.
              </p>
            </motion.div>

            {/* Browse by Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="font-serif text-2xl font-medium mb-6 text-center">
                Browse by Price
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {pricingTiers.map((tier) => (
                  <Link
                    key={tier.name}
                    to={tier.link}
                    className={`group relative p-6 rounded-xl border transition-all duration-300 text-center ${
                      tier.popular
                        ? "bg-foreground text-background border-foreground hover:shadow-elevated"
                        : "bg-card border-border/50 hover:border-primary/30 hover:shadow-elevated"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
                          Popular
                        </span>
                      </div>
                    )}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                        tier.popular ? "bg-background/10" : "bg-primary/10"
                      }`}
                    >
                      <tier.icon
                        className={`w-5 h-5 ${
                          tier.popular ? "text-background" : "text-primary"
                        }`}
                      />
                    </div>
                    <h3
                      className={`font-serif text-lg font-medium mb-1 ${
                        tier.popular ? "text-background" : "text-foreground"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-2xl font-semibold mb-1 ${
                        tier.popular ? "text-background" : "text-primary"
                      }`}
                    >
                      {tier.price}
                    </p>
                    <p
                      className={`text-sm ${
                        tier.popular ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {tier.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Browse by Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl font-medium mb-6 text-center">
                Browse by Category
              </h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {categories.map((category) => (
                  <motion.div key={category.title} variants={itemVariants}>
                    <Link
                      to={category.link}
                      className="group block p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <span className="text-xs font-medium text-primary">
                        {category.count} templates →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BrowseTemplates;
