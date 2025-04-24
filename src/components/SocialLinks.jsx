const SocialLinks = ({ socialLinks }) => (
  <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-4 ml-4">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        aria-label={link.label}
        target="_blank"
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;
