const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    secondary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
