import Button from "../../components/Button";
import { Mail, Briefcase } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
      <a href="#contact">
        <Button size="lg" variant="primary">
          <Mail className="w-5 h-5 mr-2" />
          Parlons-en
        </Button>
      </a>

      <a href="#projects">
        <Button size="lg" variant="primary">
          <Briefcase className="w-5 h-5 mr-2" />
          Voir mes réalisations
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;