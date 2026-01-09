import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/quiz`;

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() 
      || request.headers.get('x-real-ip') 
      || 'unknown';

    const backendResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...body, ip_address: ip }),
      cache: 'no-store',
    });

    if (!backendResponse.ok) {
      try {
        const errorData = await backendResponse.json();
        return NextResponse.json(errorData, { status: backendResponse.status });
      } catch (e) {
        return NextResponse.json(
          { success: false, error: 'Failed to submit quiz' },
          { status: backendResponse.status }
        );
      }
    }

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Connection to backend failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const playlistId = searchParams.get('playlist_id');

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    let url = `${baseUrl}/quiz?page=${page}&limit=${limit}`;
    
    if (playlistId) {
      url += `&playlist_id=${playlistId}`;
    }

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

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch quiz results' },
      { status: 500 }
    );
  }
}
