const Button = ({
  children,
  variant = "primary",
  className = "",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
  };

  const sizes = {
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
