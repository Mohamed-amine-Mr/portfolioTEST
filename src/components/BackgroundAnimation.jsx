import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
