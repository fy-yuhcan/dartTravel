import { Button } from "@/components/ui/button";
import Plane from "../icons/icon";

interface TravelPlannerFooterProps {
  onStartTravel: () => void;
}

const TravelPlannerFooter: React.FC<TravelPlannerFooterProps> = ({ onStartTravel }) => {
  return (
    <div className="w-full">
      <Button className="w-full" onClick={onStartTravel}>
        <Plane className="mr-2 h-4 w-4" /> 旅行を始める
      </Button>
    </div>
  );
};

export default TravelPlannerFooter;

