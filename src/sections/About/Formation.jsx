import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";

const Formation = () => {
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

  const certifications = [
    {
      id: 3,
      institution: "Certification Udemy de Jonas",
      title: "Certificat de formation en développement frontend",
      year: "2025",
      credential:
        "https://www.udemy.com/share/108PTo3@h5oXZhnF9nMVURn1P4I77_bT73SBH1Z7rmICC0Ixka4G3O3Z_eTEELuxDznIKw48YA==/",
    },
    {
      id: 1,
      institution: "Learn.Microsoft",
      title: "Git Fundamentals & Version Control",
      year: "2024",
      credential:
        "https://learn.microsoft.com/api/achievements/share/en-us/mohamedaminemounir-3759/XQR9FRPY?sharingId=1CF7BA7DDE3338A0",
    },
    {
      id: 2,
      institution: "Great Learning Academy",
      title:
        "Formation intensive en développement frontend, y compris React.js",
      year: "2024",
      credential:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/5278637/original/Mohamed_amine_Mounir20240901-74-1k1qwf.jpg",
    },

    {
      id: 4,
      institution: "Le Wagon",
      title: " Intro to UI/UX Design",
      year: "2025",
      credential: "https://app.lewagon.school/certificates/ovrv79lquk",
    },
    {
      id: 5,
      institution: "Le Wagon",
      title: "Intro to Git & Github",
      year: "2025",
      credential: "https://app.lewagon.school/certificates/045n6lpm2t",
    },
  ];
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
    >
      <div className="flex items-start gap-6">
        <div className="p-4 bg-indigo-100 rounded-lg">
          <GraduationCap className="w-8 h-8 text-indigo-600" />
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Éducation & Certifications
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400">2024 – 2025</p>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.institution}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{cert.title}</p>
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Show Credential
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Formation;
