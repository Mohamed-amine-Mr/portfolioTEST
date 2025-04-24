import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sun, Moon } from "lucide-react";
import { useState } from "react";

const MobileNavMenu = ({
  navLinks,
  socialLinks,
  //   activeSection,
  closeMenu,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  const handleNavClick = () => {
    closeMenu();
    setExpandedDropdown(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-white dark:bg-gray-900"
    >
      <div className="px-4 py-2 space-y-1">
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.dropdownItems ? (
              <div>
                <button
                  onClick={() =>
                    setExpandedDropdown(
                      expandedDropdown === link.name ? null : link.name
                    )
                  }
                  className={`w-full flex items-center justify-between px-4 py-2`}
                >
                  {link.name}
                  <ChevronRight
                    className={`transform ${
                      expandedDropdown === link.name ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="pl-4"
                    >
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={handleNavClick}
                          className="block px-4 py-2"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block px-4 py-2"
              >
                {link.name}
              </a>
            )}
          </div>
        ))}

        <div className="flex space-x-4 px-4 py-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-4 py-2"
        >
          {isDarkMode ? Sun : Moon}
        </button>
      </div>
    </motion.div>
  );
};

export default MobileNavMenu;
