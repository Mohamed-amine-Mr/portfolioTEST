import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import logo from "../Header/logoTransparent.png";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="py-8 bg-gradient-to-br from-gray-900 to-blue-900/30 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div variants={itemVariants}>
            <img src={logo} alt="MounirWeb" className="h-16 mb-4" />
            <p className="text-gray-300">
              MounirWeb - Votre partenaire pour des solutions web modernes et
              performantes. Contactez-nous pour lancer votre projet dès
              aujourd’hui !
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                <a
                  href="tel:+212600000000"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +212 600 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.56 4.14 1.54 5.908L0 24l6.233-1.632A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.02a9.97 9.97 0 01-5.09-1.398l-.356-.21-3.698.97.975-3.588-.212-.36A9.97 9.97 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.95-6.336c-.328-.164-1.942-.96-2.244-1.068-.302-.108-.522-.164-.742.164-.22.328-.852 1.068-.964 1.286-.112.218-.224.246-.552.082-.328-.164-1.382-.51-2.64-1.628-.976-.868-1.638-1.944-1.83-2.272-.192-.328-.02-.504.144-.668.148-.146.328-.328.492-.492.164-.164.22-.328.328-.548.108-.22.054-.41-.026-.574-.08-.164-.742-1.794-.964-2.46-.216-.65-.436-.546-.742-.558-.192-.008-.412-.008-.632-.008-.22 0-.576.082-.876.41-.3.328-1.148 1.12-1.148 2.732 0 1.612 1.176 3.168 1.34 3.388.164.22 2.316 3.548 5.618 4.972.792.354 1.408.566 1.888.724.792.262 1.512.226 2.08.138.636-.098 1.942-.794 2.216-1.562.274-.768.274-1.426.192-1.562-.082-.136-.302-.218-.63-.382z" />
                </svg>
                <a
                  href="https://wa.me/+212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                <a
                  href="mailto:contact@mounirweb.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  contact@mounirweb.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-400">
            © 2025 MounirWeb. Tous droits réservés.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
