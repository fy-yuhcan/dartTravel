'use client';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RegionSelectorProps {
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ selectedRegion, onSelectRegion }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="region">地域を選択</Label>
      <Select value={selectedRegion} onValueChange={onSelectRegion}>
        <SelectTrigger id="region">
          <SelectValue placeholder="地域を選択してください" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asia">アジア</SelectItem>
          <SelectItem value="europe">ヨーロッパ</SelectItem>
          <SelectItem value="northamerica">北米</SelectItem>
          <SelectItem value="southamerica">南米</SelectItem>
          <SelectItem value="africa">アフリカ</SelectItem>
          <SelectItem value="oceania">オセアニア</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RegionSelector;

