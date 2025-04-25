// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Terminal, Linkedin, Github, ChevronDown } from "lucide-react";
// import { useDarkMode } from "../hooks/useDarkMode";
// import logo from "./logoTransparent.png";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isDarkMode, setIsDarkMode] = useDarkMode();
//   const [expandedDropdown, setExpandedDropdown] = useState(null);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     {
//       name: "Services",
//       href: "#services",
//     },
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const socialLinks = [
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       href: "https://www.linkedin.com/in/mohamed-amine-mounir-6a125732b/",
//       label: "LinkedIn",
//     },
//     // {
//     //   icon: <Github className="w-5 h-5" />,
//     //   href: "https://github.com/yourusername", // Replace with your GitHub URL
//     //   label: "GitHub",
//     // },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       const sections = ["home", "services", "about", "projects", "contact"];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const bounds = element.getBoundingClientRect();
//           return bounds.top <= 100 && bounds.bottom >= 100;
//         }
//         return false;
//       });

//       if (current) {
//         setActiveSection(current);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMobileNavClick = () => {
//     setIsOpen(false);
//     setExpandedDropdown(null);
//   };

//   const toggleDropdown = (name) => {
//     setExpandedDropdown(expandedDropdown === name ? null : name);
//   };

//   const linkVariants = {
//     hover: {
//       scale: 1.05,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
//           : "bg-transparent dark:bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo and Tagline */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="flex-shrink-0 flex items-center space-x-3"
//           >
//             <motion.img
//               src={logo}
//               className="h-16"
//               alt="MounirWeb"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//             />
//             <div className="hidden md:block">
//               <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
//                 MounirWeb
//               </span>
//               <p className="text-xs text-gray-500 dark:text-gray-400">
//                 Solutions Web Modernes
//               </p>
//             </div>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative group">
//                 <motion.a
//                   href={link.href}
//                   className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1 ${
//                     activeSection === link.name.toLowerCase()
//                       ? "text-blue-600 dark:text-blue-400 font-semibold"
//                       : ""
//                   }`}
//                   variants={linkVariants}
//                   whileHover="hover"
//                 >
//                   <span>{link.name}</span>
//                   {link.dropdownItems && <ChevronDown className="w-4 h-4" />}
//                 </motion.a>
//                 {link.dropdownItems && (
//                   <motion.div
//                     className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {link.dropdownItems.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </motion.div>
//                 )}
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>
//             ))}

//             {/* Social Links */}
//             <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-4">
//               {socialLinks.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   aria-label={link.label}
//                 >
//                   {link.icon}
//                 </motion.a>
//               ))}
//             </div>

//             {/* Theme Toggle */}
//             <motion.button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label={
//                 isDarkMode ? "Switch to light mode" : "Switch to dark mode"
//               }
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </motion.button>

//             {/* Secondary CTA */}
//             <motion.a
//               href="#services"
//               className="px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Nos Services
//             </motion.a>

//             {/* Primary CTA */}
//             <motion.a
//               href="#contact"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center space-x-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Terminal className="w-4 h-4" />
//               <span>Obtenez un Devis Gratuit</span>
//             </motion.a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <motion.button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label={
//                 isDarkMode ? "Switch to light mode" : "Switch to dark mode"
//               }
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </motion.button>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/30 border-t border-gray-200 dark:border-gray-700"
//           >
//             <div className="px-4 py-6 space-y-4">
//               {navLinks.map((link) => (
//                 <div key={link.name}>
//                   <div className="flex items-center justify-between">
//                     <a
//                       href={link.href}
//                       className={`block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
//                         activeSection === link.name.toLowerCase()
//                           ? "text-blue-600 dark:text-blue-400 font-semibold"
//                           : ""
//                       }`}
//                       onClick={handleMobileNavClick}
//                     >
//                       {link.name}
//                     </a>
//                     {link.dropdownItems && (
//                       <button
//                         onClick={() => toggleDropdown(link.name)}
//                         className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//                       >
//                         <ChevronDown
//                           className={`w-4 h-4 transition-transform ${
//                             expandedDropdown === link.name ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                     )}
//                   </div>
//                   {link.dropdownItems && expandedDropdown === link.name && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="ml-4 mt-2 space-y-2"
//                     >
//                       {link.dropdownItems.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className="block text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                           onClick={handleMobileNavClick}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </motion.div>
//                   )}
//                 </div>
//               ))}

//               {/* Mobile Social Links */}
//               <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 {socialLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                     aria-label={link.label}
//                   >
//                     {link.icon}
//                   </a>
//                 ))}
//               </div>

//               {/* Mobile CTA */}
//               <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <a
//                   href="#projects"
//                   className="flex-1 text-center px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//                   onClick={handleMobileNavClick}
//                 >
//                   Nos Services
//                 </a>
//                 <a
//                   href="#contact"
//                   className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
//                   onClick={handleMobileNavClick}
//                 >
//                   Obtenez un Devis Gratuit
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Header;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Terminal,
  Linkedin,
  Github,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import logo from "./logoTransparent.png";

/**
 * Header component for navigation with responsive design and theme toggle.
 * @param {Object} props
 * @param {string} props.activeSection - The currently active section (e.g., "home", "about").
 */
const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mohamed-amine-mounir-6a125732b/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/mounirweb", // Replace with your actual GitHub URL
      label: "GitHub",
    },
  ];

  // Handle scroll for sticky header and hide/show on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMobileNavClick = () => {
    setIsOpen(false);
    setExpandedDropdown(null);
  };

  const toggleDropdown = (name) => {
    setExpandedDropdown(expandedDropdown === name ? null : name);
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Tagline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            className="flex-shrink-0 flex items-center space-x-3"
          >
            <motion.img
              src={logo}
              className="h-16"
              alt="MounirWeb"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
            <div className="hidden md:block">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                MounirWeb
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Solutions Web Modernes
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <motion.div variants={linkVariants} whileHover="hover">
                  <Link
                    to={link.path}
                    className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1 ${
                      activeSection ===
                      (link.path === "/" ? "home" : link.path.slice(1))
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : ""
                    }`}
                    aria-current={
                      activeSection ===
                      (link.path === "/" ? "home" : link.path.slice(1))
                        ? "page"
                        : undefined
                    }
                  >
                    <span>{link.name}</span>
                    {link.dropdownItems && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </motion.div>
                {link.dropdownItems && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Secondary CTA */}
            <motion.div variants={linkVariants} whileHover="hover">
              <Link
                to="/services"
                className="px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Nos Services
              </Link>
            </motion.div>

            {/* Primary CTA */}
            <motion.div variants={linkVariants} whileHover="hover">
              <Link
                to="/contact"
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/20 flex items-center space-x-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span>Obtenez un Devis Gratuit</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/30 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      className={`block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                        activeSection ===
                        (link.path === "/" ? "home" : link.path.slice(1))
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : ""
                      }`}
                      onClick={handleMobileNavClick}
                      aria-current={
                        activeSection ===
                        (link.path === "/" ? "home" : link.path.slice(1))
                          ? "page"
                          : undefined
                      }
                    >
                      {link.name}
                    </Link>
                    {link.dropdownItems && (
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {link.dropdownItems && expandedDropdown === link.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={handleMobileNavClick}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Mobile Social Links */}
              <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/services"
                  className="flex-1 text-center px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={handleMobileNavClick}
                >
                  Nos Services
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                  onClick={handleMobileNavClick}
                >
                  Obtenez un Devis Gratuit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
