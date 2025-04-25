import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code, Globe, Search } from "lucide-react";

const Services = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web",
      description:
        "Création de sites web modernes, responsives et performants avec React, Tailwind CSS et plus encore.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Applications Web",
      description:
        "Développement d'applications web sur mesure pour répondre aux besoins spécifiques de votre entreprise.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Optimisation SEO",
      description:
        "Amélioration de la visibilité de votre site sur les moteurs de recherche pour attirer plus de clients.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            En tant que développeur web freelance, je propose une gamme de
            services pour aider votre entreprise à se démarquer en ligne.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-3">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
