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
              Hi <span className="text-gradient-crimson">Precious Planners,</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I bet we've all been there, that feeling where you have dreams, goals, 
                plans… but somehow the days slip by, and those ambitions stay just 
                that: dreams. You set intentions, but keeping track of your habits, 
                your finances, your priorities? That's a whole other story.
              </p>
              <p>
                Yep, that was me. I wanted to live an organized, intentional life, 
                but nothing I tried really worked. I'd start planning, feel motivated, 
                and then… life would happen. And I realized the problem wasn't my 
                effort or my ambition, it was my habits. Motivation alone wasn't enough.
              </p>
              <p>
                I needed a way to track my habits, my goals, my money, to hold myself 
                accountable, and to finally see progress. So I created tools that 
                worked for me, templates that helped me take action instead of letting 
                my dreams sit on a list.
              </p>
              <p className="text-foreground font-medium">
                And then it hit me: if I struggled like this, there are so many others 
                who do too. People who have dreams and ambitions but feel held back 
                because their life isn't organized. That's why Organized Life exists. 
                Our templates are practical, simple, and beautiful, designed to help you 
                track your life, stay accountable, and take action every day. Because 
                organizing your life shouldn't be a dream, it should be something you 
                can actually achieve.
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
