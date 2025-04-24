import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/Mohamed-amine-Mr",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/mohamed-amine-mounir-6a125732b/",
  },
];

const SocialLinks = () => {
  return (
    <div className="pt-8">
      <div className="flex  justify-center lg:justify-start gap-4">
        {socialLinks.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800
            border border-gray-300 dark:border-gray-600 rounded-lg
            hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300
            text-gray-700 dark:text-gray-300"
            target="_blank"
          >
            {platform.icon}
            <span>{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
