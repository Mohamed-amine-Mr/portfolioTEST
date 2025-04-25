import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Award,
  ShieldCheck,
  Mail,
  MessageSquare,
  Linkedin,
  ChevronDown,
  Code,
  Globe,
  Quote,
} from "lucide-react";
import img from "./home.png";
import Services from "../services/Services";
import About from "../About/About";
import Projects from "../Projects/projects";
import Reviews from "../reviews/Reviews";
import Contact from "../Contact/Contact";
import WhyHireMe from "../whyChoseMe/WhyHireMe.jsx";

const Hero = () => {
  const scrollRef = useRef(null);

  // Intersection Observer for scroll animations (optional, since we use Tailwind animations)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.67],
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-background-light via-blue-50 to-purple-50 dark:from-background-dark dark:via-blue-900/30 dark:to-purple-900/30 overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 lg:pt-28 px-6 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Main Heading and Description */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
                MounirWeb : Votre Partenaire pour des Sites Web Exceptionnels
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Nous créons des sites web modernes, performants et sur mesure
                pour booster votre présence en ligne et atteindre vos objectifs
                digitaux.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12 justify-center lg:justify-start">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white font-medium rounded-lg shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/20 overflow-hidden dark:glow-on-hover"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Obtenez un Devis Gratuit Aujourd’hui</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary-light to-primary-light dark:from-secondary-dark dark:to-primary-dark"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark font-medium rounded-lg border border-gray-200 dark:border-gray-700 dark:glow-on-hover"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-5 h-5 mr-2" />
                Découvrez Nos Projets Réussis
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 justify-center lg:justify-start">
              <motion.a
                href="https://www.linkedin.com/in/mohamed-amine-mounir-6a125732b/"
                className="text-gray-500 dark:glow-on-hover"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 360, color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:contact@mounirweb.com"
                className="text-gray-500 dark:glow-on-hover"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 360, color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80 border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 z-10"></div>
                <img
                  src={img}
                  alt="MounirWeb Professional Web Development"
                  className="w-full h-full object-cover relative z-0"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=MounirWeb";
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: -10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
                className="absolute top-0 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <Code className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              </motion.div>

              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2.5,
                  delay: 0.5,
                }}
                className="absolute bottom-0 -left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <Globe className="w-8 h-8 text-secondary-light dark:text-secondary-dark" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollRef} className="flex justify-center mt-12">
          <motion.div
            initial={{ y: -10, opacity: 0.5 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
            className="animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-6 lg:px-16 pt-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-heading font-bold text-text-light dark:text-text-dark text-center mb-12"
          >
            Pourquoi Choisir MounirWeb ?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
                Projets Réussis avec Passion
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Des solutions sur mesure pour des clients satisfaits
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
                Designs Modernes & Responsifs
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Sites adaptés à tous les appareils
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
                Support 24/7 Garanti
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Assistance continue pour votre tranquillité
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 lg:px-16 pt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700 hidden-element prose dark:prose-invert mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-8 h-8 text-primary-light dark:text-primary-dark mx-auto mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              “MounirWeb a transformé notre présence en ligne avec un site
              moderne et performant. Leur équipe est professionnelle et à
              l’écoute !“
            </p>
            <p className="text-sm font-medium text-text-light dark:text-text-dark">
              - Yahia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 lg:px-16 pt-16"
      >
        <Services />
      </motion.section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-700 my-16"></div>

      {/* About Section */}
      {/* <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 lg:px-16"
      > */}
      <About />
      {/* </motion.section> */}

      {/* Separator */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-700 my-16"></div>

      {/* Projects Section */}
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 lg:px-16"
      >
        <Projects />
      </motion.section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-700 my-16"></div>

      {/* Reviews Section */}
      <motion.section
        id="reviews"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 lg:px-16"
      >
        <Reviews />
      </motion.section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-700 my-16"></div>

      {/* Contact Section */}
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 lg:px-16 pb-20"
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default Hero;
