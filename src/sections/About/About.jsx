// import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { Code, Globe, CheckCircle, Award, User, Briefcase } from "lucide-react";
// import img from "./1.png";

// const About = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   // Skills data
//   const currentSkills = ["React.js", "UI/UX Design"];
//   const detailedSkills = [
//     {
//       category: "Core Technologies",
//       items: [
//         "🔥 React.js: Advanced concepts like hooks, context API, and component composition",
//         "🔥 Next.js: App Router, Server Components, and Server Actions",
//         "🔥 State Management: Redux, Redux Toolkit, Thunks, and React Query",
//         "🔥 Routing: React Router v6.4+ with data loading",
//         "🔥 Styling: Tailwind CSS, CSS Modules, and Styled Components (CSS-in-JS)",
//       ],
//     },
//     {
//       category: "What I Bring to the Table",
//       items: [
//         "✅ Building reusable, composable, and versatile components",
//         "✅ Advanced state management: local vs. global, UI vs. remote state",
//         "✅ Performance optimization: memo, useMemo, useCallback, and code splitting",
//         "✅ Implementing real-world features: authentication, data sorting, filtering, pagination, and dark mode",
//         "✅ Debugging and understanding React internals: virtual DOM, reconciliation, and fiber tree",
//       ],
//     },
//   ];

//   // Particle animation
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;

//     const particles = [];
//     const particleCount = 15;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 2 + 1,
//         color: `hsl(${Math.random() * 60 + 210}, 80%, 60%)`,
//         speed: Math.random() * 0.5 + 0.2,
//         direction: Math.random() * Math.PI * 2,
//         opacity: Math.random() * 0.5 + 0.5,
//       });
//     }

//     let lastTime = 0;
//     const fps = 60;
//     const interval = 1000 / fps;

//     function animate(timestamp) {
//       if (timestamp - lastTime < interval) {
//         requestAnimationFrame(animate);
//         return;
//       }

//       lastTime = timestamp;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((p) => {
//         p.x += Math.cos(p.direction) * p.speed;
//         p.y += Math.sin(p.direction) * p.speed;

//         if (p.x < 0 || p.x > canvas.width) p.direction = Math.PI - p.direction;
//         if (p.y < 0 || p.y > canvas.height) p.direction = -p.direction;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color
//           .replace(")", `, ${p.opacity})`)
//           .replace("rgb", "rgba");
//         ctx.fill();
//       });

//       requestAnimationFrame(animate);
//     }

//     // Check for reduced motion preference
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;
//     let animationId;
//     if (!prefersReducedMotion) {
//       animationId = requestAnimationFrame(animate);
//     }

//     // Handle resize
//     const handleResize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       if (animationId) cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       className="py-24 px-6 lg:px-16 bg-gradient-to-br from-background-light via-blue-50 to-purple-50 dark:from-background-dark dark:via-blue-900/30 dark:to-purple-900/30"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
//             À Propos de Moi
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Découvrez mon parcours et mes compétences en développement web
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-12">
//           {/* Profile Image Column */}
//           <motion.div
//             className="lg:col-span-5 flex flex-col"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={containerVariants}
//           >
//             {/* Image Container with Modern Effects */}
//             <motion.div
//               className="relative mx-auto lg:mx-0 mb-8"
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.3 },
//               }}
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-xl blur opacity-75 animate-pulse"></div>
//               <div className="absolute -inset-4 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-xl blur-lg opacity-20"></div>
//               <div className="relative rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl aspect-[4/5] w-full max-w-md">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 z-10"></div>
//                 <canvas
//                   ref={canvasRef}
//                   className="absolute inset-0 w-full h-full z-0"
//                 ></canvas>
//                 <img
//                   src={img}
//                   alt="Mounir Mohamed Amine, Développeur Web Freelance"
//                   className="w-full h-full object-cover relative z-0"
//                   loading="eager"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://via.placeholder.com/600x750?text=Profile";
//                   }}
//                 />
//                 <motion.div
//                   className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 justify-center"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                 >
//                   <motion.span
//                     className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-primary-light dark:text-primary-dark shadow-sm dark:glow-on-hover"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     React
//                   </motion.span>
//                   <motion.span
//                     className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-secondary-light dark:text-secondary-dark shadow-sm dark:glow-on-hover"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     UI/UX
//                   </motion.span>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Quick Info */}
//             <motion.div
//               className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
//               variants={itemVariants}
//             >
//               <ul className="space-y-4">
//                 <li className="flex items-center space-x-3">
//                   <User className="w-5 h-5 text-primary-light dark:text-primary-dark" />
//                   <span className="text-text-light dark:text-text-dark">
//                     Mounir Mohamed Amine
//                   </span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <Briefcase className="w-5 h-5 text-primary-light dark:text-primary-dark" />
//                   <span className="text-text-light dark:text-text-dark">
//                     Développeur Web Freelance
//                   </span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <Globe className="w-5 h-5 text-primary-light dark:text-primary-dark" />
//                   <span className="text-text-light dark:text-text-dark">
//                     Basé au Maroc
//                   </span>
//                 </li>
//               </ul>
//             </motion.div>
//           </motion.div>

//           {/* Content Column */}
//           <motion.div
//             className="lg:col-span-7"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={containerVariants}
//           >
//             {/* Bio */}
//             <motion.div
//               className="mb-8 prose dark:prose-invert"
//               variants={itemVariants}
//             >
//               <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4 flex items-center">
//                 <User className="w-6 h-6 mr-2 text-primary-light dark:text-primary-dark" />
//                 Qui Suis-Je?
//               </h3>
//               <div className="text-gray-600 dark:text-gray-300 space-y-4">
//                 <p>
//                   Bonjour! Je m'appelle <strong>Mounir Mohamed Amine</strong>,
//                   un développeur web freelance débutant basé au Maroc, passionné
//                   par la création de sites web modernes et responsifs.
//                 </p>
//                 <p>
//                   Je me concentre sur le développement frontend avec React.js et
//                   sur la conception UI/UX pour offrir des interfaces utilisateur
//                   intuitives et esthétiques qui répondent aux besoins de mes
//                   clients. J'ai également obtenu 5 certifications dans divers
//                   domaines du développement web, ce qui renforce mes compétences
//                   techniques.
//                 </p>
//                 <p>
//                   Ma philosophie est simple : comprendre parfaitement les
//                   besoins de mes clients pour leur fournir des solutions sur
//                   mesure qui non seulement répondent à leurs attentes, mais les
//                   dépassent. Chaque projet est une nouvelle opportunité
//                   d'apprendre et de créer quelque chose d'unique.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Skills with badges */}
//             <motion.div className="mb-8" variants={itemVariants}>
//               <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4 flex items-center">
//                 <Code className="w-6 h-6 mr-2 text-primary-light dark:text-primary-dark" />
//                 Mes Compétences
//               </h3>

//               {/* Detailed Skills */}
//               <div className="mb-6">
//                 <h4 className="text-lg font-heading font-semibold text-gray-800 dark:text-gray-200 mb-3">
//                   Compétences Techniques
//                 </h4>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {detailedSkills.map((skillSet, index) => (
//                     <motion.div
//                       key={index}
//                       className="bg-white dark:bg-gray-800 dark:glassmorphism p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
//                       whileHover={{
//                         y: -5,
//                         boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <h5 className="text-md font-heading font-semibold text-text-light dark:text-text-dark mb-2">
//                         {skillSet.category}
//                       </h5>
//                       <div className="space-y-2">
//                         {skillSet.items.map((skill, idx) => (
//                           <div
//                             key={idx}
//                             className="flex items-center gap-3 text-gray-700 dark:text-gray-400 text-sm"
//                           >
//                             <div className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full"></div>
//                             {skill}
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Current Skills */}
//               <div className="mb-6">
//                 <h4 className="text-lg font-heading font-semibold text-gray-800 dark:text-gray-200 mb-3">
//                   Compétences Actuelles
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {currentSkills.map((skill, index) => (
//                     <motion.span
//                       key={index}
//                       className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/30 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium dark:glow-on-hover"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {skill}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Why Choose Me */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
//               whileHover={{
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4 flex items-center">
//                 <Award className="w-6 h-6 mr-2 text-primary-light dark:text-primary-dark" />
//                 Pourquoi Me Choisir?
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-600 dark:text-gray-300">
//                     Approche personnalisée adaptée à vos besoins spécifiques
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-600 dark:text-gray-300">
//                     Communication claire et transparente tout au long du projet
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-600 dark:text-gray-300">
//                     Solutions techniques modernes et évolutives
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-600 dark:text-gray-300">
//                     Expertise en UI/UX pour des interfaces intuitives et
//                     attrayantes
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-600 dark:text-gray-300">
//                     Support continu et maintenance après livraison
//                   </span>
//                 </li>
//               </ul>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { useEffect } from "react";
import { Code, Globe, CheckCircle, Award, User, Briefcase } from "lucide-react";
import img from "./1.png";

// Placeholder for different image sizes (you should have these in your assets)
const imgSmall = "./1-300.webp"; // Smaller image for mobile
const imgLarge = "./1-600.webp"; // Larger image for desktop

const About = () => {
  // Animation variants for other elements (not the image)
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
  const detailedSkills = [
    {
      category: "Core Technologies",
      items: [
        "🔥 React.js: Advanced concepts like hooks, context API, and component composition",
        "🔥 Next.js: App Router, Server Components, and Server Actions",
        "🔥 State Management: Redux, Redux Toolkit, Thunks, and React Query",
        "🔥 Routing: React Router v6.4+ with data loading",
        "🔥 Styling: Tailwind CSS, CSS Modules, and Styled Components (CSS-in-JS)",
      ],
    },
    {
      category: "What I Bring to the Table",
      items: [
        "✅ Building reusable, composable, and versatile components",
        "✅ Advanced state management: local vs. global, UI vs. remote state",
        "✅ Performance optimization: memo, useMemo, useCallback, and code splitting",
        "✅ Implementing real-world features: authentication, data sorting, filtering, pagination, and dark mode",
        "✅ Debugging and understanding React internals: virtual DOM, reconciliation, and fiber tree",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-16 bg-gradient-to-br from-background-light via-blue-50 to-purple-50 dark:from-background-dark dark:via-blue-900/30 dark:to-purple-900/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours et mes compétences en développement web
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Profile Image Column */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Image Container without Motion Transitions */}
            <div className="relative mx-auto lg:mx-0 mb-8">
              <img
                src={img}
                sizes="(max-width: 600px) 300px, 600px"
                alt="Mounir Mohamed Amine, Développeur Web Freelance"
                className="w-full h-full object-cover relative z-0"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-primary-light dark:text-primary-dark shadow-sm dark:glow-on-hover">
                  React
                </span>
                <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-secondary-light dark:text-secondary-dark shadow-sm dark:glow-on-hover">
                  UI/UX
                </span>
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
            >
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                  <span className="text-text-light dark:text-text-dark">
                    Mounir Mohamed Amine
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                  <span className="text-text-light dark:text-text-dark">
                    Développeur Web Freelance
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                  <span className="text-text-light dark:text-text-dark">
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
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Bio */}
            <motion.div
              className="mb-8 prose dark:prose-invert"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-primary-light dark:text-primary-dark" />
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
                  clients. J'ai également obtenu 5 certifications dans divers
                  domaines du développement web, ce qui renforce mes compétences
                  techniques.
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
              <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-primary-light dark:text-primary-dark" />
                Mes Compétences
              </h3>

              {/* Detailed Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-heading font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Compétences Techniques
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {detailedSkills.map((skillSet, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 dark:glassmorphism p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h5 className="text-md font-heading font-semibold text-text-light dark:text-text-dark mb-2">
                        {skillSet.category}
                      </h5>
                      <div className="space-y-2">
                        {skillSet.items.map((skill, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-gray-700 dark:text-gray-400 text-sm"
                          >
                            <div className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-heading font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Compétences Actuelles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/30 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium dark:glow-on-hover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why Choose Me */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 dark:glassmorphism rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary-light dark:text-primary-dark" />
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
