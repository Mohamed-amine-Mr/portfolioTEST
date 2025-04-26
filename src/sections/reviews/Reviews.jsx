import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";

const Reviews = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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

  const reviews = [
    {
      name: "Mohamed",
      company: "email",
      rating: 5,
      date: "3 mois",
      comment: "ناضي أخويا تبارك الله عليك",
    },
    {
      name: "Mohamed",
      company: "khamsat",
      rating: 5,
      date: "2 mois",
      comment:
        "أشكرك جزيل الشكر على مرونتك وسرعة استجابتك. أقدر التزامك بتلبية المتطلبات وتوضيحك بشأن جودة العمل والمدة الزمنية.",
    },
    {
      name: "Client",
      company: "Email",
      rating: 5,
      date: "10 days",
      comment: "داكشي لخر هوا هداك الله يعطيك الصحة",
    },
    {
      name: "The Moroccan Kitchen",
      company: "Email",
      rating: 5,
      date: "18 Novembre",
      comment: "سي محمد، خدمة نقية تبارك الله عليك !",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ce Que Disent Mes Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez ce que mes clients pensent de mes services et de leur
            expérience avec MounirWeb.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{review.comment}"
              </p>

              {/* Client Info */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {review.company}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {review.date}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Reviews;
