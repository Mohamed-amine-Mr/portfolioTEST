import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  MessageSquare,
  X,
} from "lucide-react";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import agency from "./agency.png";
import podcast from "./podcast.png";
import sushi from "./sushi.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const projects = [
    {
      videoUrl: "https://www.youtube.com/@mounirweb1",
      id: 9,
      title: "Ecommerce Store",
      description:
        "Une boutique en ligne optimisée pour maximiser les ventes, avec une interface utilisateur moderne et responsive. Développée avec des composants React et stylisée avec Tailwind CSS pour une expérience utilisateur fluide.",
      image: img2,
      category: "frontend",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "https://ecommerce-platform-mu.vercel.app/",
      features: [
        "Navigation intuitive pour les utilisateurs",
        "Design responsive adapté à tous les appareils",
        "Performance optimisée pour des chargements rapides",
      ],
    },
    {
      videoUrl: "https://www.youtube.com/@mounirweb1",
      id: 8,
      title: "Restaurant App",
      description:
        "Une application intuitive pour améliorer l’expérience client dans les restaurants, avec une gestion d’état fluide grâce à useState. Animations modernes réalisées avec Framer Motion pour un design attractif.",
      image: img3,
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://aurum-gamma.vercel.app/",
      features: [
        "Interface utilisateur élégante et moderne",
        "Animations fluides pour une expérience immersive",
        "Design responsive pour tous les écrans",
      ],
    },
    {
      id: 3,
      title: "Marketing Agency",
      description:
        "A digital marketing agency website designed to enhance online presence and achieve marketing goals through targeted campaigns and SEO optimization.",
      image: agency,
      liveUrl: "https://marketing-agency-sandy-xi.vercel.app/",
      category: "frontend",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "React Scroll",
        "React Parallax Tilt",
      ],
      features: [
        "Call-to-action optimisé pour les conversions",
        "Design responsive et moderne",
        "Chargement rapide pour une meilleure expérience utilisateur",
        "Smooth scrolling navigation with React Scroll",
        "Interactive 3D/4D animations using Framer Motion and React Parallax Tilt",
      ],
      whatIDid:
        "Designed and developed a fully responsive marketing agency website with a focus on user engagement. Implemented smooth scrolling navigation using React Scroll, added 3D/4D animations with Framer Motion and React Parallax Tilt, and optimized performance for fast loading. Integrated Tailwind CSS for a modern, consistent design across all devices.",
    },
    {
      id: 4,
      title: "Sushi Restaurant",
      description:
        "A modern website for a sushi restaurant, showcasing the menu and encouraging online orders with an intuitive user experience.",
      image: sushi,
      liveUrl: "https://sushi-khouribga.vercel.app/",
      category: "frontend",
      technologies: ["React", "Tailwind CSS"],
      features: [
        "Call-to-action optimisé pour les conversions",
        "Design responsive et moderne",
        "Chargement rapide pour une meilleure expérience utilisateur",
      ],
      whatIDid:
        "Built a responsive sushi restaurant website using React and Tailwind CSS. Focused on creating an intuitive user interface to showcase the menu and drive online orders, ensuring fast loading times and a seamless experience across devices.",
    },
    {
      id: 5,
      title: "Podcast Platform",
      description:
        "A podcast platform designed for users to explore and listen to episodes, featuring a clean and modern interface.",
      image: podcast,
      liveUrl: "https://podcast-khouribga.vercel.app/",
      category: "frontend",
      technologies: ["React", "Tailwind CSS"],
      features: [
        "Call-to-action optimisé pour les conversions",
        "Design responsive et moderne",
        "Chargement rapide pour une meilleure expérience utilisateur",
      ],
      whatIDid:
        "Developed a podcast platform with React and Tailwind CSS, emphasizing a clean and modern design. Ensured the site is fully responsive and optimized for fast loading, providing users with an easy way to explore and listen to podcast episodes.",
    },
    {
      videoUrl: "https://www.youtube.com/@mounirweb1",
      id: 1,
      title: "Fast React Pizza Co.",
      description:
        "Une plateforme de commande de pizzas avec navigation fluide grâce à React Router et gestion d’état avancée avec Redux Toolkit. Nous avons intégré des fonctionnalités comme le suivi des commandes et un panier interactif, le tout stylisé avec Tailwind CSS.",
      image: img1,
      category: "frontend",
      technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
      liveUrl: "https://fast-react-pizza-theta-orpin.vercel.app/",
      features: [
        "Menu interactif avec options de filtrage",
        "Panier d’achat avec gestion de quantités",
        "Suivi des commandes en temps réel",
        "Design responsive pour tous les appareils",
      ],
      wip: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-8" variants={projectVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les projets réalisés par MounirWeb. Chaque solution est
            conçue pour répondre aux besoins spécifiques de nos clients et
            maximiser leur présence en ligne.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            style={{ marginLeft: "-16px" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            style={{ marginRight: "-16px" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Projects Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar py-6 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence>
              <motion.div
                className="flex space-x-8"
                variants={containerVariants}
                style={{ minWidth: "max-content" }}
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={projectVariants}
                    layoutId={`project-${project.id}`}
                    className="relative group"
                    onHoverStart={() =>
                      !isMobile && setHoveredProject(project.id)
                    }
                    onHoverEnd={() => !isMobile && setHoveredProject(null)}
                    onClick={() =>
                      isMobile &&
                      setHoveredProject(
                        project.id === hoveredProject ? null : project.id
                      )
                    }
                    style={{ width: "300px", flexShrink: 0 }}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                          onClick={() =>
                            !project.liveUrl && setSelectedImage(project.image)
                          }
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                          <div className="flex gap-4">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-300 transition-colors flex items-center gap-1"
                                title="Live Demo"
                              >
                                <ExternalLink className="w-5 h-5" />
                                {!isMobile && "Live Demo"}
                              </a>
                            )}
                            {project.videoUrl && (
                              <a
                                href={project.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-300 transition-colors flex items-center gap-1"
                                title="Watch Video"
                              >
                                <PlayCircle className="w-5 h-5" />
                                {!isMobile && "Watch Video"}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Project Details */}
                    {(hoveredProject === project.id || isMobile) && (
                      <motion.div
                        layoutId={`project-details-${project.id}`}
                        className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 mt-4 z-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                          Fonctionnalités Clés
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative max-w-3xl w-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <motion.img
                  src={selectedImage}
                  alt="Project Preview"
                  className="w-full h-auto rounded-lg shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Indicators */}

        {/* CTA */}
        <motion.div className="mt-12 text-center" variants={projectVariants}>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Prêt à lancer votre projet ? Faites confiance à MounirWeb pour une
            solution web sur mesure !
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all transform hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Obtenez un Devis Gratuit Aujourd’hui
          </a>
        </motion.div>
      </motion.div>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
