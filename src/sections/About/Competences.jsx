import { motion } from "framer-motion";

const Competences = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    {
      category: "Core Technologies",
      items: [
        "🔥 React.js: Advanced concepts like hooks, context API, and component composition",
        "🔥 Next.js: App Router, Server Components, and Server Actions",
        "🔥 State Management: Redux, Redux Toolkit, Thunks, and React Query",
        "🔥 Routing: React Router v6.4+ with data loading",
        "🔥 Styling: Tailwind CSS, CSS Modules, and Styled Components (CSS-in-JS)",
      ],
    },
    {
      category: "What I Bring to the Table",
      items: [
        "✅ Building reusable, composable, and versatile components",
        "✅ Advanced state management: local vs. global, UI vs. remote state",
        "✅ Performance optimization: memo, useMemo, useCallback, and code splitting",
        "✅ Implementing real-world features: authentication, data sorting, filtering, pagination, and dark mode",
        "✅ Debugging and understanding React internals: virtual DOM, reconciliation, and fiber tree",
      ],
    },
    {
      category: "Why Choose Me?",
      items: [
        "🚀 Strong foundation in modern React development",
        "🚀 Experience building professional, real-world applications",
        "🚀 Focus on clean, maintainable, and scalable code",
        "🚀 Passion for learning and applying cutting-edge technologies",
      ],
    },
  ];

  return (
    <motion.div
      className="grid md:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skillSet, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {skillSet.category}
          </h3>
          <div className="space-y-3">
            {skillSet.items.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-400"
              >
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Competences;
