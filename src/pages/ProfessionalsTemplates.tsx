import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const professionalsTemplates = [
  {
    id: 1,
    name: "Project Planner Overview",
    description: "Get a bird's-eye view of your projects with comprehensive planning tools.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Project Timeline Planner",
    description: "Visualize project milestones and deadlines with timeline planning.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Task & Priority Manager",
    description: "Organize tasks by priority and manage your workload effectively.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Weekly Work Planner",
    description: "Plan your work week with structured daily goals and priorities.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Daily Work Schedule",
    description: "Structure your workday hour by hour for maximum productivity.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Meeting Notes Planner",
    description: "Capture meeting notes, action items, and follow-ups in one place.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Client Meeting Notes",
    description: "Professional client meeting documentation with agenda and outcomes.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Action Items Tracker",
    description: "Track and manage action items across all your projects and meetings.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Professional Goals Planner",
    description: "Set and achieve your career goals with strategic planning.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Career Development Planner",
    description: "Map out your career path with skills development and milestones.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "Performance Review Tracker",
    description: "Prepare for reviews with documented achievements and feedback.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 12,
    name: "OKR Planning Template",
    description: "Set and track Objectives and Key Results for quarterly planning.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 13,
    name: "Team Collaboration Planner",
    description: "Coordinate team projects with shared goals and responsibilities.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 14,
    name: "Work Productivity Dashboard",
    description: "Monitor your productivity metrics and optimize your work habits.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 15,
    name: "Decision Log & Notes",
    description: "Document important decisions with context and reasoning.",
    price: 4,
    image: "/placeholder.svg",
  },
  {
    id: 16,
    name: "Time Blocking Work Planner",
    description: "Master time blocking with dedicated focus periods for deep work.",
    price: 5,
    image: "/placeholder.svg",
  },
  {
    id: 17,
    name: "Business Strategy Planner",
    description: "Develop and track your business strategy with actionable plans.",
    price: 6,
    image: "/placeholder.svg",
  },
  {
    id: 18,
    name: "End-of-Week Work Review",
    description: "Reflect on your week, celebrate wins, and plan for improvement.",
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

const ProfessionalsTemplates = () => {
  return (
    <>
      <Helmet>
        <title>Professionals Templates | Organized Life</title>
        <meta
          name="description"
          content="Premium professional templates for project planning, meeting notes, career development, and work productivity. Starting at just $4."
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
                Professionals Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Professionals Templates
              </h1>
              <p className="text-muted-foreground text-lg">
                Elevate your professional life with powerful planners, trackers, 
                and tools designed for career success.
              </p>
            </motion.div>

            {/* Templates Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {professionalsTemplates.map((template) => (
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

export default ProfessionalsTemplates;
