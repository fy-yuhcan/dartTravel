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
          <SelectItem value="hokkaido">北海道</SelectItem>
          <SelectItem value="tohoku">東北</SelectItem>
          <SelectItem value="northkanto">北関東</SelectItem>
          <SelectItem value="neartoukyou">東京近辺</SelectItem>
          <SelectItem value="myhome">藤田家</SelectItem>
          <SelectItem value="hokuriku">北陸</SelectItem>
          <SelectItem value="kousinetu">甲信越</SelectItem>
          <SelectItem value="chubu">中部</SelectItem>
          <SelectItem value="kansai">関西</SelectItem>
          <SelectItem value="chugoku">中国</SelectItem>
          <SelectItem value="sikoku">四国</SelectItem>
          <SelectItem value="kyushu">九州</SelectItem>
          <SelectItem value="okinawa">沖縄</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RegionSelector;

