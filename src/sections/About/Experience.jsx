import { motion } from "framer-motion";
import { Briefcase, Target } from "lucide-react";

const Experience = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const experiences = [
    {
      title: "Développeur Frontend Freelance",
      company: "Projets Freelance",
      period: "2022 - Présent",
      points: [
        "Création d'interfaces réactives et conviviales utilisant React.js et Tailwind CSS.",
        "Collaboration avec les clients pour comprendre leurs besoins et fournir des solutions sur mesure.",
        "Amélioration des performances des sites web de 40% grâce à des techniques d'optimisation.",
      ],
    },
  ];

  return (
    <motion.div className="space-y-6" variants={staggerContainer}>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400">
                {exp.company}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {exp.period}
              </p>
              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-400"
                  >
                    <Target className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;