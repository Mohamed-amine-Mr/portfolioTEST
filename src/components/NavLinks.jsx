import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = ({ navLinks, activeSection, handleMobileNavClick }) => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  return navLinks.map((link) => (
    <div key={link.name} className="relative group">
      <a
        href={link.href}
        className={`px-3 py-2 rounded-md text-sm font-medium
          hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors
          ${
            activeSection === link.name.toLowerCase()
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-gray-600 dark:text-gray-300"
          }`}
      >
        <span className="flex items-center space-x-1">
          <span>{link.name}</span>
          {link.dropdownItems && <ChevronDown className="w-4 h-4" />}
        </span>
      </a>
      {link.dropdownItems && (
        <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
          <div className="relative top-2">
            <div className="absolute -top-2 left-4 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-t border-l border-gray-200 dark:border-gray-700"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
              {link.dropdownItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
                  onClick={handleMobileNavClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  ));
};

export default NavLinks;
