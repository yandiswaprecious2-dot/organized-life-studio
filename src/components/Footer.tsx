import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Organized<span className="text-primary">Life</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Beautiful, affordable templates to help you organize every aspect 
              of your life. Created with love by Precious Planners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Templates", "About", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-background/60 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-background/10 text-center"
        >
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Organized Life. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
