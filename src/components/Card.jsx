const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
