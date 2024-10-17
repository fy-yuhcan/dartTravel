import { Card, CardContent, CardFooter } from "@/components/ui/card";
import TravelPlannerFooter from "./footer";
import TravelPlannerHeader from "./home-heder";
import DestinationInput from "./input";
import DestinationList from "./list";
import RegionSelector from "./selector";


interface TravelPlannerCardProps {
  destinations: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  onAddDestination: (destination: string) => void;
}

const TravelPlannerCard: React.FC<TravelPlannerCardProps> = ({
  destinations,
  selectedRegion,
  onSelectRegion,
  onAddDestination
}) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <TravelPlannerHeader />
      <CardContent className="space-y-4">
        <RegionSelector selectedRegion={selectedRegion} onSelectRegion={onSelectRegion} />
        <DestinationInput onAddDestination={onAddDestination} />
        {destinations.length > 0 && <DestinationList destinations={destinations} />}
      </CardContent>
      <CardFooter>
        <TravelPlannerFooter />
      </CardFooter>
    </Card>
  );
};

export default TravelPlannerCard;
