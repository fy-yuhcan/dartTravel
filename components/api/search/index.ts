export interface SelectDestinationPayload {
  destination: string;
}

export interface SelectDestinationResponse {
  original_destination: string;
  selected_destination: {
    latitude: number;
    longitude: number;
  };
  error?: string;
}

export const selectDestination = async (
  payload: SelectDestinationPayload
): Promise<SelectDestinationResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/api/public/search-destination`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    return { 
      original_destination: payload.destination, 
      selected_destination: { latitude: 0, longitude: 0 }, 
      error: errorData.error || 'エラーが発生しました' 
    };
  }

  const data = await response.json();
  return data;
};
