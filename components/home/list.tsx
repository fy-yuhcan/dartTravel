import { Label } from "@/components/ui/label";

interface DestinationListProps {
  destinations: string[];
}

const DestinationList: React.FC<DestinationListProps> = ({ destinations }) => {
  return (
    <div className="space-y-2">
      <Label>候補地リスト</Label>
      <ul className="list-disc list-inside">
        {destinations.map((dest, index) => (
          <li key={index}>{dest}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;
