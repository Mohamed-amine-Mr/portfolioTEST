// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   Star,
//   Award,
//   ShieldCheck,
//   Mail,
//   MessageSquare,
//   Linkedin,
//   ArrowRight,
//   ChevronDown,
//   Code,
//   Zap,
//   Globe,
// } from "lucide-react";
// import HeroHeader from "./HeroHeader";
import img from "./home.png";

// const Hero = () => {
//   const scrollRef = useRef(null);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const hiddenElements = document.querySelectorAll(".hidden-element");
//     hiddenElements.forEach((el) => observer.observe(el));

//     return () => {
//       hiddenElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
//       <section className="pt-24 lg:pt-28 px-6 lg:px-16 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center pt-16 lg:pt-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="order-2 lg:order-1"
//           >
//             {/* Using our improved HeroHeader component */}
//             <HeroHeader />

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12 justify-center lg:justify-start">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
//               >
//                 <MessageSquare className="w-5 h-5 mr-2" />
//                 Parlons de votre projet
//               </a>
//               <a
//                 href="#projects"
//                 className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
//               >
//                 <Code className="w-5 h-5 mr-2" />
//                 Voir mes réalisations
//               </a>
//             </div>

//             {/* Social Proof */}
//             <div className="flex items-center space-x-8 justify-center lg:justify-start">
//               <a
//                 href="https://linkedin.com/"
//                 className="text-gray-500 hover:text-blue-600 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href="mailto:contact@example.com"
//                 className="text-gray-500 hover:text-blue-600 transition-colors"
//                 aria-label="Email"
//               >
//                 <Mail className="w-5 h-5" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="order-1 lg:order-2 flex justify-center lg:justify-end"
//           >
//             <div className="relative">
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
//               <div className="relative rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80 border-4 border-white dark:border-gray-800 shadow-xl">
//                 <img
//                   src={img}
//                   alt="Mohamed Amine"
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://via.placeholder.com/400x400?text=Profile";
//                   }}
//                 />
//               </div>

//               {/* Floating Elements */}
//               <motion.div
//                 initial={{ y: 10 }}
//                 animate={{ y: -10 }}
//                 transition={{
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   duration: 2,
//                 }}
//                 className="absolute top-0 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
//               >
//                 <Code className="w-8 h-8 text-blue-600" />
//               </motion.div>

//               <motion.div
//                 initial={{ y: -10 }}
//                 animate={{ y: 10 }}
//                 transition={{
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   duration: 2.5,
//                   delay: 0.5,
//                 }}
//                 className="absolute bottom-0 -left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
//               >
//                 <Globe className="w-8 h-8 text-purple-600" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <div ref={scrollRef} className="flex justify-center mt-12">
//           <motion.div
//             initial={{ y: -10, opacity: 0.5 }}
//             animate={{ y: 10, opacity: 1 }}
//             transition={{
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1.5,
//             }}
//           >
//             <ChevronDown className="w-6 h-6 text-gray-400" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Trust Indicators */}
//       <section className="px-6 lg:px-16 from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
//             {/* Card 1 */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
//             >
//               <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-6">
//                 <Star className="w-8 h-8 text-yellow-500" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                 100%
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400 font-medium">
//                 Satisfaction client garantie
//               </p>
//             </motion.div>

//             {/* Card 2 */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
//             >
//               <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
//                 <Award className="w-8 h-8 text-blue-500" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                 Premium
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400 font-medium">
//                 Qualité exceptionnelle
//               </p>
//             </motion.div>

//             {/* Card 3 */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
//             >
//               <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
//                 <ShieldCheck className="w-8 h-8 text-green-500" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                 Garantie
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400 font-medium">
//                 Fiabilité à toute épreuve
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Services Preview */}
//       <section className="pt-24 px-6 lg:px-16 pb-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Mes Services
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Des solutions web sur mesure pour répondre à tous vos besoins
//               digitaux
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hidden-element"
//             >
//               <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
//               <div className="p-8">
//                 <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
//                   <Globe className="w-7 h-7 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                   Sites Web Professionnels
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6">
//                   Des sites vitrines et institutionnels optimisés pour convertir
//                   vos visiteurs en clients.
//                 </p>
//                 <a
//                   href="#details"
//                   className="flex items-center text-blue-600 font-medium hover:text-blue-700"
//                 >
//                   En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
//                 </a>
//               </div>
//             </motion.div>

//             {/* Service 2 */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hidden-element"
//             >
//               <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
//               <div className="p-8">
//                 <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
//                   <Code className="w-7 h-7 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                   Développement Sur Mesure
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6">
//                   Applications web personnalisées pour répondre aux besoins
//                   spécifiques de votre entreprise.
//                 </p>
//                 <a
//                   href="#details"
//                   className="flex items-center text-purple-600 font-medium hover:text-purple-700"
//                 >
//                   En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
//                 </a>
//               </div>
//             </motion.div>

//             {/* Service 3 */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hidden-element"
//             >
//               <div className="h-3 bg-gradient-to-r from-green-500 to-emerald-500"></div>
//               <div className="p-8">
//                 <div className="w-14 h-14 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
//                   <Zap className="w-7 h-7 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                   E-commerce
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6">
//                   Des boutiques en ligne performantes pour vendre vos produits
//                   efficacement.
//                 </p>
//                 <a
//                   href="#details"
//                   className="flex items-center text-green-600 font-medium hover:text-green-700"
//                 >
//                   En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CSS for Animations */}
//       <style jsx>{`
//         .hidden-element {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 1s ease;
//         }

//         .hidden-element.show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .typewriter-text {
//           border-right: 3px solid;
//           animation: blink-caret 0.75s step-end infinite;
//         }

//         @keyframes blink-caret {
//           from,
//           to {
//             border-color: transparent;
//           }
//           50% {
//             border-color: #3b82f6;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Award,
  ShieldCheck,
  Mail,
  MessageSquare,
  Linkedin,
  ArrowRight,
  ChevronDown,
  Code,
  Zap,
  Globe,
  Quote,
} from "lucide-react";
import HeroHeader from "./HeroHeader";

const Hero = () => {
  const scrollRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30 overflow-hidden">
      <section className="pt-24 lg:pt-28 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Main Heading and Description */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Obtenez un Devis Gratuit Aujourd’hui
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
              >
                <Code className="w-5 h-5 mr-2" />
                Découvrez Nos Projets Réussis
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/mohamed-amine-mounir-6a125732b/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@mounirweb.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80 border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10"></div>
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
                <Code className="w-8 h-8 text-blue-600" />
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
                <Globe className="w-8 h-8 text-purple-600" />
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
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-6 lg:px-16 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10+ Projets Réussis
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Des clients satisfaits à travers le monde
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Designs Modernes & Responsifs
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Sites adaptés à tous les appareils
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hidden-element"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700 hidden-element">
            <Quote className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              "MounirWeb a transformé notre présence en ligne avec un site
              moderne et performant. Leur équipe est professionnelle et à
              l’écoute !"
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              - Sarah M., Fondatrice d’une Startup
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="pt-24 px-6 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Des solutions web sur mesure pour faire briller votre entreprise
              en ligne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hidden-element"
            >
              <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Sites Vitrines pour Entreprises
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Boostez votre présence en ligne avec un site élégant et
                  performant, conçu pour attirer et convertir vos clients.
                </p>
                <a
                  href="#details"
                  className="flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hidden-element"
            >
              <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Applications Web Personnalisées
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Solutions sur mesure pour automatiser vos processus et
                  répondre aux besoins spécifiques de votre entreprise.
                </p>
                <a
                  href="#details"
                  className="flex items-center text-purple-600 font-medium hover:text-purple-700"
                >
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hidden-element"
            >
              <div className="h-3 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Boutiques en Ligne Rentables
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Lancez votre e-commerce avec une boutique optimisée pour
                  maximiser vos ventes et fidéliser vos clients.
                </p>
                <a
                  href="#details"
                  className="flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSS for Animations */}
      <style jsx>{`
        .hidden-element {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
        }

        .hidden-element.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Hero;
