"use client";

import { useState } from 'react';
import TravelPlannerCard from '@/components/home/card';

export default function Home() {
  const [destinations, setDestinations] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const addDestination = (destination: string) => {
    setDestinations([...destinations, destination]);
  };

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100">
      <TravelPlannerCard
        destinations={destinations}
        selectedRegion={selectedRegion}
        onSelectRegion={handleSelectRegion}
        onAddDestination={addDestination}
      />
    </div>
  );
}

