import { motion } from "framer-motion";
import { Zap, Layout, Cpu, Globe2, FileText, Server, PenTool, CheckCircle } from "lucide-react";

const Profile = () => {
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

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <motion.div className="space-y-6" variants={staggerContainer}>
        <motion.div
          variants={fadeInUp}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Développeur Frontend & Freelance
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              Je suis un développeur frontend passionné, spécialisé dans
              React.js, Next.js, JavaScript/TypeScript et Tailwind CSS.
              J'ai une expertise dans la création de sites web modernes,
              scalables et réactifs. Que vous ayez besoin d'un site web
              personnalisé ou d'une application web complexe, je peux
              fournir des solutions de haute qualité adaptées à vos
              besoins.
            </p>
            <p>
              En tant que freelance, je gère également des équipes de
              designers et de développeurs pour des projets de grande
              envergure, assurant une exécution sans faille et une
              livraison en temps voulu.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Pourquoi Travailler Avec Moi?
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                text: "Rapide et Efficace",
              },
              {
                icon: <Layout className="w-5 h-5" />,
                text: "Solutions Personnalisées",
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                text: "Expertise Frontend",
              },
              {
                icon: <Globe2 className="w-5 h-5" />,
                text: "Clients Globaux",
              },
              {
                icon: <FileText className="w-5 h-5" />,
                text: "Communication Claire",
              },
              {
                icon: <Server className="w-5 h-5" />,
                text: "Systèmes Scalables",
              },
              {
                icon: <PenTool className="w-5 h-5" />,
                text: "Focus sur l'UI/UX",
              },
              {
                icon: <CheckCircle className="w-5 h-5" />,
                text: "Satisfaction 100%",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="text-indigo-600">{item.icon}</div>
                <span className="text-gray-700 dark:text-gray-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Objectifs Professionnels
        </h4>
        <div className="space-y-4">
          {[
            "Fournir des sites web et des applications web de haute qualité pour les entreprises et les particuliers.",
            "Aider les startups et les PME à établir leur présence en ligne avec des solutions abordables.",
            "Développer mon expertise en développement frontend.",
            "Établir des relations à long terme avec les clients en fournissant un support et une maintenance continus.",
            "Collaborer avec des équipes mondiales sur des projets innovants.",
          ].map((goal, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
            >
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;