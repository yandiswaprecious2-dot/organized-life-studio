import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: "Essential",
    price: "$4",
    description: "Perfect for trying out a specific planner",
    features: [
      "1 premium template",
      "Instant download",
      "Lifetime access",
      "Free updates",
    ],
    popular: false,
    icon: Star,
    link: "/pricing/essential",
  },
  {
    name: "Core",
    price: "$5",
    description: "Most popular choice for productivity",
    features: [
      "2-3 related templates",
      "Matching aesthetic design",
      "Instant download",
      "Lifetime access",
      "Free updates",
    ],
    popular: false,
    icon: Zap,
    link: "/pricing/core",
  },
  {
    name: "Customized",
    price: "$6",
    description: "Get the complete themed bundle",
    features: [
      "4-5 premium templates",
      "Full collection access",
      "Instant download",
      "Lifetime access",
      "Priority support",
    ],
    popular: true,
    icon: Crown,
    link: "/pricing/customized",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gradient-warm">
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
            Simple Pricing
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Affordable for Everyone
          </h2>
          <p className="text-muted-foreground text-lg">
            No subscriptions, no hidden fees. Just beautiful templates at 
            prices that won't break the bank.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                tier.popular
                  ? "bg-foreground text-background"
                  : "bg-card border border-border/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
                    Premium
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
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
                  className={`font-serif text-xl font-medium ${
                    tier.popular ? "text-background" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
              </div>

              <div className="mb-4">
                <span
                  className={`font-serif text-5xl font-medium ${
                    tier.popular ? "text-background" : "text-foreground"
                  }`}
                >
                  {tier.price}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  tier.popular ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`w-4 h-4 ${
                        tier.popular ? "text-primary" : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.popular ? "text-background/80" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "warm" : "hero"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to={tier.link}>Browse Templates</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
