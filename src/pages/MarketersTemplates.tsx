import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  { name: "Content Calendar Planner", description: "Plan and organize your content across all platforms with ease.", price: "$5" },
  { name: "Social Media Planner", description: "Schedule and strategize your social media posts for maximum impact.", price: "$5" },
  { name: "Campaign Planning Tracker", description: "Track every detail of your marketing campaigns from start to finish.", price: "$6" },
  { name: "Marketing Strategy Planner", description: "Develop comprehensive marketing strategies aligned with your goals.", price: "$6" },
  { name: "Brand Content Planner", description: "Keep your brand messaging consistent across all content.", price: "$5" },
  { name: "Monthly Content Overview", description: "Get a bird's eye view of your monthly content schedule.", price: "$4" },
  { name: "Posting Schedule Planner", description: "Optimize your posting times for better engagement.", price: "$4" },
  { name: "Engagement & Growth Tracker", description: "Monitor your audience growth and engagement metrics.", price: "$5" },
  { name: "Analytics & Insights Tracker", description: "Track key performance indicators and derive actionable insights.", price: "$5" },
  { name: "Launch Campaign Planner", description: "Plan successful product or service launches step by step.", price: "$6" },
  { name: "Email Marketing Planner", description: "Organize your email campaigns and track open rates.", price: "$5" },
  { name: "Influencer Campaign Tracker", description: "Manage influencer partnerships and track campaign results.", price: "$5" },
  { name: "Ads Performance Tracker", description: "Monitor ad spend and performance across platforms.", price: "$5" },
  { name: "Marketing Review & Optimization Planner", description: "Review campaigns and identify areas for improvement.", price: "$5" },
];

const MarketersTemplates = () => {
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
            Marketers Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Supercharge your marketing efforts with templates designed for content creators and marketing professionals.
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

export default MarketersTemplates;
