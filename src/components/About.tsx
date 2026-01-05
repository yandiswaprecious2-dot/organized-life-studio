import { motion } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Hi, I'm <span className="text-gradient-crimson">Precious Planners</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                It all started with a simple realization: I was struggling to organize 
                my life — my habits, my finances, my goals. I'd see beautiful templates 
                being sold online and think, "Why should I buy that when I can learn 
                to create my own?"
              </p>
              <p>
                So I did. I went to YouTube, taught myself the craft, and created 
                template after template. With each one, it became easier. And then 
                it hit me — there are so many people out there just like me, looking 
                for affordable, beautiful tools to organize their days.
              </p>
              <p className="text-foreground font-medium">
                That's why Organized Life exists. Not to make millions, but to help 
                you take control of your life at a price that doesn't break the bank. 
                Templates starting at just $4-6 — because everyone deserves an 
                organized life.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Value Cards */}
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every template is carefully crafted with attention to detail, aesthetics, and functionality.",
              },
              {
                icon: Lightbulb,
                title: "Built from Experience",
                description: "I create what I use. These templates solve real problems I've faced in my own journey.",
              },
              {
                icon: Users,
                title: "For Everyone",
                description: "Students, professionals, marketers, traders — there's a template for every walk of life.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border/50 hover:shadow-soft transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-warm-sand/30 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
