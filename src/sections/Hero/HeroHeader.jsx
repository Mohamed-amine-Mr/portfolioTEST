import { motion } from "framer-motion";
import TypewriterEffect from "../../components/TypewriterEffect";

const roles = [
  "Développeur Web Freelance au Maroc",
  "Spécialiste React.js",
  "Expert en UI/UX",
  "Passionné par le Développement Web",
];

const HeroHeader = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="space-y-6 max-w-3xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center lg:text-left text-gray-900 dark:text-white leading-tight"
        variants={itemVariants}
      >
        Bonjour, je suis{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Mounir Mohamed Amine
        </span>
      </motion.h1>

      {/* Dynamic Role Display */}
      <motion.div
        className="text-xl sm:text-2xl md:text-3xl text-center lg:text-left text-gray-700 dark:text-gray-300 h-12 flex justify-center lg:justify-start items-center"
        variants={itemVariants}
      >
        <TypewriterEffect
          texts={roles}
          typingDelay={80}
          pauseDelay={2000}
          eraseDelay={40}
        />
      </motion.div>

      {/* Subheading */}
      <motion.p
        className="text-base sm:text-lg text-center lg:text-left text-gray-600 dark:text-gray-300 leading-relaxed"
        variants={itemVariants}
      >
        Vous voulez lancer votre activité en ligne ou booster vos ventes
        rapidement ? Notre service de création de sites e-commerce au Maroc et à
        l'international est prêt à vous aider à réaliser vos projets numériques.
        Nous vous offrons des solutions complètes, adaptées à vos besoins et à
        votre budget, avec un design personnalisé, une expérience utilisateur
        fluide et une sécurité renforcée.
      </motion.p>
    </motion.div>
  );
};

export default HeroHeader;
