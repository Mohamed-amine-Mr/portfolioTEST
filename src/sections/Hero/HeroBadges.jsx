import Badge from "../../components/Badge";

const HeroBadges = () => {
  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
      <Badge variant="success" className="inline-flex items-center gap-2">
        {/* Green Dot for Online Status */}
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        
        {/* Open to Work Text */}
        Open to Work
      </Badge>
    </div>
  );
};

export default HeroBadges;