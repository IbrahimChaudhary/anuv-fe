import { NextRequest, NextResponse } from 'next/server';
import { Playlist } from '../../../../types';

interface PlaylistApiResponse {
  success: boolean;
  data?: Playlist;
  error?: string;
}

export async function GET(request: NextRequest) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/playlists/random`;

    const backendResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend API returned ${backendResponse.status}`);
    }

    const data: PlaylistApiResponse = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch playlist'
      },
      { status: 500 }
    );
  }
}
