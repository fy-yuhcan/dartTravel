import { Button } from "@/components/ui/button";
import Plane from "../icons/icon";



const TravelPlannerFooter: React.FC = () => {
  return (
    <div className="w-full">
      <Button className="w-full">
        <Plane className="mr-2 h-4 w-4" /> 旅行を始める
      </Button>
    </div>
  );
};

export default TravelPlannerFooter;
