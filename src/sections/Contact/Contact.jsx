import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Merci pour votre demande ! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", project: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez MounirWeb Aujourd’hui
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Prêt à lancer votre projet ? Remplissez le formulaire ci-dessous ou
            contactez-nous directement !
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Contact Form and Info */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          {/* Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-900 dark:text-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-900 dark:text-white"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Décrivez votre projet
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-900 dark:text-white"
                  placeholder="Parlez-nous de votre projet..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyez votre demande maintenant !
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Autres moyens de nous contacter
            </h3>
            <div className="space-y-4">
              <motion.a
                href="tel:+212600000000"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="bg-green-500 text-white rounded-full p-2">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+212 600 000 000</span>
              </motion.a>

              <motion.a
                href="https://wa.me/+212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="bg-green-500 text-white rounded-full p-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.56 4.14 1.54 5.908L0 24l6.233-1.632A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.02a9.97 9.97 0 01-5.09-1.398l-.356-.21-3.698.97.975-3.588-.212-.36A9.97 9.97 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.95-6.336c-.328-.164-1.942-.96-2.244-1.068-.302-.108-.522-.164-.742.164-.22.328-.852 1.068-.964 1.286-.112.218-.224.246-.552.082-.328-.164-1.382-.51-2.64-1.628-.976-.868-1.638-1.944-1.83-2.272-.192-.328-.02-.504.144-.668.148-.146.328-.328.492-.492.164-.164.22-.328.328-.548.108-.22.054-.41-.026-.574-.08-.164-.742-1.794-.964-2.46-.216-.65-.436-.546-.742-.558-.192-.008-.412-.008-.632-.008-.22 0-.576.082-.876.41-.3.328-1.148 1.12-1.148 2.732 0 1.612 1.176 3.168 1.34 3.388.164.22 2.316 3.548 5.618 4.972.792.354 1.408.566 1.888.724.792.262 1.512.226 2.08.138.636-.098 1.942-.794 2.216-1.562.274-.768.274-1.426.192-1.562-.082-.136-.302-.218-.63-.382z" />
                  </svg>
                </div>
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                href="mailto:contact@mounirweb.com"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="bg-red-500 text-white rounded-full p-2">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@mounirweb.com</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
