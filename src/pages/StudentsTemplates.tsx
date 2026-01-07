import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const studentsTemplates = [
  {
    id: 1,
    name: "Academic Planner Semester Overview",
    description: "Plan your entire semester with course schedules, deadlines, and key dates at a glance.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Weekly Study Planner",
    description: "Organize your weekly study sessions with time blocks and subject priorities.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Daily Study Schedule",
    description: "Structure each day for maximum productivity with hourly planning slots.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Assignment Tracker",
    description: "Never miss a deadline with organized assignment tracking and status updates.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Exam Preparation Planner",
    description: "Strategic exam prep with topic breakdowns and study milestones.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Revision Timetable",
    description: "Create effective revision schedules with spaced repetition planning.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Study Goals Planner",
    description: "Set and track academic goals with actionable steps and progress monitoring.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Coursework Deadline Tracker",
    description: "Keep all your coursework deadlines organized in one central place.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Lecture Notes Organizer",
    description: "Structure and organize your lecture notes by subject and date.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Reading List & Study Log",
    description: "Track your required readings and log your study progress.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "Productivity Study Planner",
    description: "Maximize your study efficiency with productivity-focused planning tools.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 12,
    name: "GPA & Progress Tracker",
    description: "Monitor your grades and academic progress throughout the year.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 13,
    name: "Exam Countdown Planner",
    description: "Count down to exam day with daily tasks and preparation checkpoints.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 14,
    name: "Study & Self-Care Balance Planner",
    description: "Balance academic demands with personal wellbeing and rest.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 15,
    name: "End-of-Term Review Planner",
    description: "Reflect on your term, assess your performance, and plan for improvement.",
    price: 4,
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

const StudentsTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Students Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium student templates for academic planning, study schedules, assignment tracking, and exam preparation. Starting at just $4."
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
                Students Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Students Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Ace your studies with beautifully designed planners, trackers, 
                and organizational tools built for academic success.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {studentsTemplates.map((template) => (
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

export default StudentsTemplates;
