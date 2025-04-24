import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Phone, Mail } from "lucide-react";
import { Header } from "./sections/index";
import logo from "./sections/Header/logoTransparent.png";

// Lazy load sections
const Hero = lazy(() => import("./sections/Hero/Hero"));
const About = lazy(() => import("./sections/About/About"));
const Projects = lazy(() => import("./sections/Projects/projects"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Simulate loading for 2 seconds (or replace with real data fetching logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle hash changes and smooth scrolling
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1) || "home";
      setActiveSection(hash);

      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHash);
    handleHash();

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Intersection Observer to update hash based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = entry.target.id;
            if (newHash !== activeSection) {
              window.history.replaceState(null, null, `#${newHash}`);
              setActiveSection(newHash);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    ["home", "about", "projects", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  // Animation variants for chat buttons
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img
            src={logo}
            className="h-32 mx-auto block mb-6"
            alt="MounirWeb"
            loading="eager"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150?text=MounirWeb";
            }}
          />
          <motion.div
            className="w-12 h-12 mx-auto rounded-full border-4 border-t-transparent border-blue-600 dark:border-blue-400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Chargement de votre expérience digitale...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app relative">
      <Header activeSection={activeSection} />

      <main>
        <section id="home">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen text-gray-600 dark:text-gray-300">
                Chargement...
              </div>
            }
          >
            <Hero />
          </Suspense>
        </section>

        <section id="about">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen text-gray-600 dark:text-gray-300">
                Chargement...
              </div>
            }
          >
            <About />
          </Suspense>
        </section>

        <section id="projects">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen text-gray-600 dark:text-gray-300">
                Chargement...
              </div>
            }
          >
            <Projects />
          </Suspense>
        </section>

        <section id="contact">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen text-gray-600 dark:text-gray-300">
                Chargement...
              </div>
            }
          >
            <Contact />
          </Suspense>
        </section>
      </main>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-20 text-gray-600 dark:text-gray-300">
            Chargement...
          </div>
        }
      >
        <Footer />
      </Suspense>

      {/* Floating Action Button with Expandable Chat Options */}
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
                custom={0}
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
                href="https://wa.me/+212600000000" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                variants={buttonVariants}
                custom={1}
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
                href="mailto:contact@mounirweb.com"
                className="bg-red-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                variants={buttonVariants}
                custom={2}
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
    </div>
  );
};

export default App;
