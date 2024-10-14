'use client';
import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DestinationInputProps {
  onAddDestination: (destination: string) => void;
}

const DestinationInput: React.FC<DestinationInputProps> = ({ onAddDestination }) => {
  const [newDestination, setNewDestination] = useState('');

  const addDestination = () => {
    if (newDestination.trim()) {
      onAddDestination(newDestination.trim());
      setNewDestination('');
    }
  };

  // ハンドラーに型を明示的に指定
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDestination(e.target.value);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="new-destination">新しい候補地を追加</Label>
      <div className="flex space-x-2">
        <Input
          id="new-destination"
          placeholder="例：京都"
          value={newDestination}
          onChange={handleChange}
        />
        <Button onClick={addDestination} size="icon">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only">候補地を追加</span>
        </Button>
      </div>
    </div>
  );
};

export default DestinationInput;

