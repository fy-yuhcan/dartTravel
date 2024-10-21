// src/api.ts

export interface Location {
  name: string;
  lat: number;
  lng: number;
}

export interface FetchLocationsPayload {
  region: string;
  destinations: string[];
}

/**
 * @param payload - リクエストボディとして送信するデータ
 * @returns ロケーションデータの配列
 * @throws エラーが発生した場合
 */
export async function fetchLocations(payload: FetchLocationsPayload): Promise<Location[]> {
  try {
    const response = await fetch('http://localhost/api/public/search-destination', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('フェッチに失敗しました');
    }

    const data: Location[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    throw error;
  }
}


