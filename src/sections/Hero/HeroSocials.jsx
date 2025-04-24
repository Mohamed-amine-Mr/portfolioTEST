import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/mohamed-amine-mounir11/",
    label: "LinkedIn",
  },
  {
    icon: <Mail />,
    href: "mailto:mohamedaminemounirdev@gmail.com",
    label: "Email",
  },
];

const HeroSocials = () => {
  return (
    <div className="flex justify-center lg:justify-start gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          {social.icon}
          <span className="sr-only">{social.label}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default HeroSocials;
