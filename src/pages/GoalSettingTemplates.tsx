import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  { name: "Vision Board Planner", description: "Visualize your dreams and create a roadmap to achieve them.", price: "$5" },
  { name: "Life Goals Planner", description: "Map out your biggest life goals across all areas.", price: "$6" },
  { name: "Annual Goals Planner", description: "Set and track meaningful goals for the entire year.", price: "$6" },
  { name: "Quarterly Goals Planner", description: "Break down yearly goals into actionable quarterly targets.", price: "$5" },
  { name: "Goal Breakdown Planner", description: "Transform big goals into manageable action steps.", price: "$5" },
  { name: "Milestone Tracker", description: "Celebrate progress by tracking key milestones.", price: "$4" },
  { name: "Goal Progress Tracker", description: "Monitor your advancement toward every goal.", price: "$4" },
  { name: "Goal Clarity Planner", description: "Get crystal clear on what you truly want to achieve.", price: "$5" },
  { name: "Focus & Alignment Planner", description: "Align daily actions with your bigger vision.", price: "$5" },
  { name: "Goal Reset Planner", description: "Reassess and realign when goals need adjustment.", price: "$5" },
];

const GoalSettingTemplates = () => {
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
            Goal Setting Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Turn your dreams into reality with goal-setting templates designed to help you plan, track, and achieve.
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

export default GoalSettingTemplates;
