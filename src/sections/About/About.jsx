import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  CheckCircle,
  Award,
  Book,
  Briefcase,
  User,
} from "lucide-react";
import img from "./1.png";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Skills data
  const currentSkills = ["React.js", "UI/UX Design"];
  const learningSkills = ["Next.js", "Redux"];
  const futureSkills = ["MERN Stack", "WordPress"];

  // Particle animation
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 210}, 80%, 60%)`,
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed;

        if (p.x < 0 || p.x > canvas.width) p.direction = Math.PI - p.direction;
        if (p.y < 0 || p.y > canvas.height) p.direction = -p.direction;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color
          .replace(")", `, ${p.opacity})`)
          .replace("rgb", "rgba");
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-16 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours et mes compétences en développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Profile Image Column */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Image Container with Modern Effects */}
            <motion.div
              className="relative mx-auto lg:mx-0 mb-8"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-purple-100 rounded-xl blur opacity-75 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 to-purple-100 rounded-xl blur-lg opacity-20"></div>
              <div className="relative rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl aspect-[4/5] w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10"></div>
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full z-0"
                ></canvas>
                <img
                  src={img}
                  alt="Mounir Mohamed Amine"
                  className="w-full h-full object-cover relative z-0"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/600x750?text=Profile";
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 shadow-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-teal-600 dark:text-teal-400 shadow-sm">
                    UI/UX
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
            >
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Mounir Mohamed Amine
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Développeur Web Freelance
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Basé au Maroc
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Bio */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-blue-600" />
                Qui Suis-Je?
              </h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Bonjour! Je m'appelle <strong>Mounir Mohamed Amine</strong>,
                  un développeur web freelance débutant basé au Maroc, passionné
                  par la création de sites web modernes et responsifs.
                </p>
                <p>
                  Je me concentre sur le développement frontend avec React.js et
                  sur la conception UI/UX pour offrir des interfaces utilisateur
                  intuitives et esthétiques qui répondent aux besoins de mes
                  clients.
                </p>
                <p>
                  Ma philosophie est simple : comprendre parfaitement les
                  besoins de mes clients pour leur fournir des solutions sur
                  mesure qui non seulement répondent à leurs attentes, mais les
                  dépassent. Chaque projet est une nouvelle opportunité
                  d'apprendre et de créer quelque chose d'unique.
                </p>
              </div>
            </motion.div>

            {/* Skills with badges */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                Mes Compétences
              </h3>

              {/* Current Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Compétences Actuelles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  En Cours d’Apprentissage
                </h4>
                <div className="flex flex-wrap gap-2">
                  {learningSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Future Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  À Venir
                </h4>
                <div className="flex flex-wrap gap-2">
                  {futureSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why Choose Me */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                Pourquoi Me Choisir?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Approche personnalisée adaptée à vos besoins spécifiques
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Communication claire et transparente tout au long du projet
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Solutions techniques modernes et évolutives
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Expertise en UI/UX pour des interfaces intuitives et
                    attrayantes
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Support continu et maintenance après livraison
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
