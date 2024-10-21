import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TravelPlannerHeader: React.FC = () => {
  return (
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-center">
        長老の案内所
      </CardTitle>
      <CardDescription className="text-center">
        行き先を選んで、素晴らしい旅行を計画しましょう！
      </CardDescription>
    </CardHeader>
  );
};

export default TravelPlannerHeader;
