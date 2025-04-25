import { useState, useEffect, Suspense, lazy } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { MessageSquare, X, Phone, Mail } from "lucide-react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Header } from "./sections/index";
import SmoothScroll from "smooth-scroll";

// Lazy load sections
const Hero = lazy(() => import("./sections/Hero/Hero"));
const About = lazy(() => import("./sections/About/About"));
const Projects = lazy(() => import("./sections/Projects/projects"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));
const Services = lazy(() => import("./sections/services/Services"));
const Reviews = lazy(() => import("./sections/reviews/Reviews"));

// Throttle function to limit scroll event frequency
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();

  // Initialize SmoothScroll
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"], [data-scroll]', {
      speed: 1200, // Slower scroll speed for professional feel (1200ms)
      speedAsDuration: true,
      easing: "easeInOutCubic", // Smooth easing for professional scrolling
      updateURL: false, // We'll handle URL updates manually
      offset: 80, // Offset to account for fixed header
    });

    // Cleanup on unmount
    return () => scroll.destroy();
  }, []);

  // Smooth scrolling when route changes
  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const element = document.getElementById(path);
    if (element) {
      const scroll = new SmoothScroll();
      scroll.animateScroll(element, null, {
        speed: 1200,
        easing: "easeInOutCubic",
        offset: 80,
      });
    }
  }, [location]);

  // Intersection Observer to update URL based on scroll with throttling
  useEffect(() => {
    const observer = new IntersectionObserver(
      throttle((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newPath =
              entry.target.id === "home" ? "/" : `/${entry.target.id}`;
            window.history.replaceState(null, null, newPath);
          }
        });
      }, 200),
      { threshold: 0.6 }
    );

    ["home", "services", "about", "projects", "reviews", "contact"].forEach(
      (id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    );

    return () => observer.disconnect();
  }, []);

  // Animation variants for chat buttons (simplified)
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  // Animation variants for sections with "fast then slow" effect
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  // Parallax effect using useScroll and useTransform
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 1000], [0, -50]); // Subtle parallax effect

  return (
    <div className="app relative">
      <Header activeSection={location.pathname.slice(1) || "home"} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <motion.section
                id="home"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: yOffset }} // Apply parallax effect
              >
                <Suspense fallback={null}>
                  <Hero />
                </Suspense>
              </motion.section>
            }
          />
          <Route
            path="/services"
            element={
              <motion.section
                id="services"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: yOffset }}
              >
                <Suspense fallback={null}>
                  <Services />
                </Suspense>
              </motion.section>
            }
          />
          <Route
            path="/about"
            element={
              <motion.section
                id="about"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: yOffset }}
              >
                <Suspense fallback={null}>
                  <About />
                </Suspense>
              </motion.section>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.section
                id="projects"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: yOffset }}
              >
                <Suspense fallback={null}>
                  <Projects />
                </Suspense>
              </motion.section>
            }
          />
          <Route
            path="/reviews"
            element={
              <motion.section
                id="reviews"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: yOffset }}
              >
                <Suspense fallback={null}>
                  <Reviews />
                </Suspense>
              </motion.section>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.section
                id="contact"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: yOffset }}
              >
                <Suspense fallback={null}>
                  <Contact />
                </Suspense>
              </motion.section>
            }
          />
        </Routes>
      </main>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ y: yOffset }}
      >
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </motion.div>

      {/* Floating Action Button with Simplified Chat Options */}
      <motion.div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={
            isChatOpen
              ? "Fermer les options de contact"
              : "Ouvrir les options de contact"
          }
        >
          {isChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6" />
          )}
        </motion.button>

        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              className="absolute bottom-16 right-0 flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {/* Phone */}
              <motion.a
                href="tel:+212600000000" // Replace with your phone number
                className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Appeler MounirWeb"
              >
                <Phone className="w-6 h-6" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/+212660446735" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contacter MounirWeb via WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.56 4.14 1.54 5.908L0 24l6.233-1.632A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.02a9.97 9.97 0 01-5.09-1.398l-.356-.21-3.698.97.975-3.588-.212-.36A9.97 9.97 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.95-6.336c-.328-.164-1.942-.96-2.244-1.068-.302-.108-.522-.164-.742.164-.22.328-.852 1.068-.964 1.286-.112.218-.224.246-.552.082-.328-.164-1.382-.51-2.64-1.628-.976-.868-1.638-1.944-1.83-2.272-.192-.328-.02-.504.144-.668.148-.146.328-.328.492-.492.164-.164.22-.328.328-.548.108-.22.054-.41-.026-.574-.08-.164-.742-1.794-.964-2.46-.216-.65-.436-.546-.742-.558-.192-.008-.412-.008-.632-.008-.22 0-.576.082-.876.41-.3.328-1.148 1.12-1.148 2.732 0 1.612 1.176 3.168 1.34 3.388.164.22 2.316 3.548 5.618 4.972.792.354 1.408.566 1.888.724.792.262 1.512.226 2.08.138.636-.098 1.942-.794 2.216-1.562.274-.768.274-1.426.192-1.562-.082-.136-.302-.218-.63-.382z" />
                </svg>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:contactmounirweb@gmail.com"
                className="bg-red-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Envoyer un email à MounirWeb"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Global CSS for Ultra-Smooth Scrolling and Performance */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
          overscroll-behavior: none; /* Prevent bounce effect on mobile */
        }

        section {
          scroll-snap-align: start;
          will-change: transform, opacity;
          min-height: 100vh; /* Ensure sections take full viewport height */
          position: relative;
        }

        /* Optimize animations for performance */
        .motion-div {
          will-change: transform, opacity;
        }

        /* Ensure smooth scrolling on all devices */
        @supports (-webkit-overflow-scrolling: touch) {
          html {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Fallback for older browsers */
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          section {
            scroll-snap-align: none;
          }
        }
      `}</style>
    </div>
  );
};

// Wrap the App component with Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
