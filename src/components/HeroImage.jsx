import ProfileImage from "./ProfileImage";

const HeroImage = ({ isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? "lg:hidden" : "hidden lg:block"
      } w-full flex justify-center`}
    >
      <ProfileImage />
    </div>
  );
};

export default HeroImage;
