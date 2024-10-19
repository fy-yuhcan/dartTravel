export interface Location {
  name: string;
  lat: number;
  lng: number;
}

export async function fetchLocations(): Promise<Location[]> {
  try {
    const response = await fetch('/api/public/search-destinations');
    if (!response.ok) {
      throw new Error('fetchnに失敗しました');
    }
    const data: Location[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    throw error;
  }
}

