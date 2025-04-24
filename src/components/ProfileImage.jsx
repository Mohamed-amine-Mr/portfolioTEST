import myimg from "../sections/Hero/home.png";

const ProfileImage = ({ isMobile = false }) => {
  const sizeClasses = isMobile ? "w-48 h-48 sm:w-56 sm:h-56" : "w-80 h-80";

  return (
    <div className={`relative ${sizeClasses} mx-auto`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
        <img
          src={myimg}
          alt="Mohamed Amine - Full Stack Developer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
