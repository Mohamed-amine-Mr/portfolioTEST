import { motion } from "framer-motion";
import { Code } from "lucide-react";

const Logo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="flex-shrink-0 flex items-center space-x-2 cursor-pointer"
  >
    <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    <span className="font-bold text-xl text-gray-900 dark:text-white cursor-pointer">
      <a
        href="#home"
        aria-label="Go to Home"
        className="hover:text-indigo-500 transition-colors duration-300"
      >
        Amine.Dev
      </a>
    </span>
  </motion.div>
);

export default Logo;
