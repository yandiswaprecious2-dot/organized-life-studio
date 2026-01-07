import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  { name: "Daily Planner Habits & Tasks", description: "Combine habit tracking with daily task management.", price: "$4" },
  { name: "Daily Planner Focus & Flow", description: "Design your day for deep focus and productive flow states.", price: "$4" },
  { name: "Daily Planner Intentional Day", description: "Plan each day with purpose and clear intentions.", price: "$4" },
  { name: "Daily Planner Productivity", description: "Maximize your daily output with structured productivity planning.", price: "$5" },
  { name: "Daily Planner Balanced Day", description: "Create harmony between work, rest, and personal time.", price: "$4" },
  { name: "Daily Planner Structured", description: "A clean, organized approach to planning your day.", price: "$4" },
  { name: "Daily Planner Minimal", description: "Simple and elegant daily planning without the clutter.", price: "$4" },
  { name: "Daily Planner Priority Focus", description: "Focus on what matters most each day.", price: "$5" },
  { name: "Weekly Planner Habits & Tasks", description: "Track habits and tasks across your entire week.", price: "$5" },
  { name: "Weekly Planner Time Blocking", description: "Master time blocking for maximum weekly productivity.", price: "$5" },
  { name: "Weekly Planner Productivity", description: "Optimize your week for peak performance.", price: "$5" },
  { name: "Weekly Planner Balance", description: "Find weekly balance between all areas of life.", price: "$5" },
  { name: "Weekly Planner Focused Week", description: "Maintain focus and clarity throughout the week.", price: "$5" },
  { name: "Weekly Planner Reset", description: "Start each week fresh with intentional planning.", price: "$5" },
  { name: "Monthly Planner Habits & Goals", description: "Align your monthly habits with bigger goals.", price: "$6" },
  { name: "Monthly Planner Productivity", description: "Plan your most productive month ever.", price: "$6" },
  { name: "Monthly Planner Intentional Living", description: "Design a month aligned with your values and vision.", price: "$6" },
  { name: "Monthly Planner Reset & Review", description: "Reflect, reset, and plan for the month ahead.", price: "$6" },
  { name: "Monthly Planner Goal Focus", description: "Keep monthly goals front and center.", price: "$6" },
  { name: "Daily Habit Tracker", description: "Simple daily tracking for building lasting habits.", price: "$4" },
  { name: "Weekly Habit Tracker", description: "Monitor your habit streaks across the week.", price: "$4" },
  { name: "Monthly Habit Tracker", description: "Long-term habit tracking for consistent progress.", price: "$5" },
];

const DailyPlanningTemplates = () => {
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
            Daily Planning Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Master your days, weeks, and months with our comprehensive planning templates for every productivity style.
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

export default DailyPlanningTemplates;
