import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  { name: "Daily Habit Tracker", description: "Build positive habits with daily tracking and progress monitoring.", price: "$4" },
  { name: "Weekly Habit Planner", description: "Plan and track your habits across the entire week.", price: "$4" },
  { name: "Morning Routine Planner", description: "Create a powerful morning routine that sets your day up for success.", price: "$4" },
  { name: "Evening Routine Planner", description: "Wind down with intention using this calming evening planner.", price: "$4" },
  { name: "Self-Care Planner", description: "Prioritize your wellbeing with dedicated self-care scheduling.", price: "$5" },
  { name: "Wellness Goals Planner", description: "Set and achieve your health and wellness objectives.", price: "$5" },
  { name: "Fitness Workout Log", description: "Track your workouts, reps, and fitness progress over time.", price: "$5" },
  { name: "Movement & Activity Tracker", description: "Monitor daily movement and stay active throughout the week.", price: "$4" },
  { name: "Mental Wellness Journal", description: "Nurture your mental health with guided journaling prompts.", price: "$5" },
  { name: "Mood Tracker", description: "Understand your emotional patterns with daily mood logging.", price: "$4" },
  { name: "Sleep Tracker", description: "Improve your sleep quality by tracking patterns and habits.", price: "$4" },
  { name: "Nutrition & Meal Log", description: "Plan meals and track your nutrition for healthier eating.", price: "$5" },
  { name: "Hydration Tracker", description: "Stay hydrated with daily water intake monitoring.", price: "$4" },
  { name: "Stress Management Planner", description: "Identify stressors and plan effective coping strategies.", price: "$5" },
  { name: "Monthly Wellness Review", description: "Reflect on your wellness journey with monthly check-ins.", price: "$5" },
  { name: "Balance & Lifestyle Planner", description: "Create harmony between work, life, and personal wellness.", price: "$6" },
];

const WellnessTemplates = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <Link to="/#templates" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wellness Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Nurture your mind, body, and soul with our comprehensive wellness templates designed for holistic health.
          </p>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Preview Image</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-1">
                  {template.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{template.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Get Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessTemplates;
