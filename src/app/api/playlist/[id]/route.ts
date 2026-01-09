import { NextRequest, NextResponse } from 'next/server';
import { Playlist } from '../../../../types';

interface PlaylistApiResponse {
  success: boolean;
  data?: Playlist;
  error?: string;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const incomingFormData = await request.formData();
    const { id } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/playlists/${id}`;

    const backendFormData = new FormData();

    for (const [key, value] of incomingFormData.entries()) {
      backendFormData.append(key, value);
    }

    const headers: Record<string, string> = {
      'Cookie': request.headers.get('cookie') || '',
    };

    const backendResponse = await fetch(url, {
      method: 'PUT',
      headers,
      body: backendFormData,
      cache: 'no-store',
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          error: errorData?.error || `Failed to update playlist`
        },
        { status: backendResponse.status }
      );
    }

    const data: PlaylistApiResponse = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update playlist'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/playlists/${id}`;
    console.log("id",url)

    const headers: Record<string, string> = {
      'Cookie': request.headers.get('cookie') || '',
    };

    const backendResponse = await fetch(url, {
      method: 'DELETE',
      headers,
      cache: 'no-store',
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          error: errorData?.error || `Failed to delete playlist`
        },
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete playlist'
      },
      { status: 500 }
    );
  }
}
