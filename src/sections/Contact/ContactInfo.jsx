import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "mohamedaminemounirdev@gmail.com",
    link: "mailto:mohamedaminemounirdev@gmail.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+212 660 446 735",
    link: "tel:+212660446735",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Morocco",
    link: null,
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Available for: Full-time positions, Freelance projects",
  },
];

const ContactInfo = () => {
  return (
    <div className="gap-4 w-38 md:w-full lg:w-full ">
      {contactInfo.map((item, index) => (
        <div
          key={index}
          className="group bg-white dark:bg-gray-800 rounded-xl my-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center gap-4 ">
            <div
              className="bg-indigo-100
            
            dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors "
            >
              {item.icon}
            </div>
            <div className="min-w-0 ">
              <h3 className="font-semibold text-gray-900  dark:text-white">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 break-words"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 break-words">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
