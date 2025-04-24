import { motion } from "framer-motion";
import Card from "../../components/Card";
import { Star, Award, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: <Star className="w-6 h-6" />,
    value: "Satisfaction",
    label: " Clients", // Single-word explanation
    color: "text-green-600",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "Qualité",
    label: " Garantie", // Single-word explanation
    color: "text-yellow-600",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    value: "Fiabilité",
    label: " Totale", // Single-word explanation
    color: "text-blue-600",
  },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-shadow duration-300"
        >
          {/* Icon Section */}
          <motion.div
            className={`flex justify-center items-center ${stat.color}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {stat.icon}
          </motion.div>

          {/* Value Section */}
          <div className="mt-4 text-gray-800 dark:text-white font-bold text-xl sm:text-2xl text-center">
            {stat.value}
          </div>

          {/* Label Section */}
          <div className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center">
            {stat.label}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HeroStats;