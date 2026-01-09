import { NextRequest, NextResponse } from 'next/server';
import { Playlist } from '../../../types';

interface PlaylistsApiResponse {
  success: boolean;
  data?: Playlist[];
  error?: string;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/playlists?page=${page}&limit=${limit}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Cookie': request.headers.get('cookie') || '',
    };

    const backendResponse = await fetch(url, {
      method: 'GET',
      headers,
      cache: 'no-store',
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend API returned ${backendResponse.status}`);
    }

    const data: PlaylistsApiResponse = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch playlists'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const incomingFormData = await request.formData();

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/playlists`;

    const backendFormData = new FormData();

    for (const [key, value] of incomingFormData.entries()) {
      console.log(`FormData - ${key}:`, value);
      backendFormData.append(key, value);
    }

    const headers: Record<string, string> = {
      'Cookie': request.headers.get('cookie') || '',
    };

    const backendResponse = await fetch(url, {
      method: 'POST',
      headers,
      body: backendFormData,
      cache: 'no-store',
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          error: errorData?.error || 'Failed to create playlist'
        },
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create playlist'
      },
      { status: 500 }
    );
  }
}
