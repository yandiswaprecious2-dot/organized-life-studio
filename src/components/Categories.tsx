import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Heart, 
  Wallet, 
  Calendar,
  Target,
  Users
} from "lucide-react";

const categories = [
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
    icon: Wallet,
    title: "Budgeting",
    description: "Expense trackers, savings goals, and financial planners",
    count: 20,
    link: "/templates/budgeting",
  },
  {
    icon: Heart,
    title: "Wellness",
    description: "Habit trackers, workout logs, and self-care routines",
    count: 16,
  },
  {
    icon: Calendar,
    title: "Daily Planning",
    description: "Daily, weekly, and monthly planning templates",
    count: 22,
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Vision boards, goal trackers, and milestone planners",
    count: 10,
  },
  {
    icon: Users,
    title: "Marketers",
    description: "Content calendars, campaign trackers, and analytics",
    count: 14,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Categories = () => {
  return (
    <section id="templates" className="py-24 lg:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
            Template Categories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Templates for Every Chapter of Your Life
          </h2>
          <p className="text-muted-foreground text-lg">
            From students navigating exams to professionals climbing the ladder, 
            and visionaries inventing the extraordinary, discover templates thoughtfully designed for you.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => {
            const isInternalLink = category.link?.startsWith('/');
            
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {category.link && isInternalLink ? (
                  <Link
                    to={category.link}
                    className="group block p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 cursor-pointer h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <span className="text-xs font-medium text-primary">
                      {category.count} templates →
                    </span>
                  </Link>
                ) : category.link ? (
                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 cursor-pointer h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <span className="text-xs font-medium text-primary">
                      {category.count} templates →
                    </span>
                  </a>
                ) : (
                  <div className="group block p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <span className="text-xs font-medium text-primary">
                      {category.count} templates →
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
