import { NextRequest, NextResponse } from 'next/server';
import { AuthApiResponse, LoginResponse } from '../../../types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({
        success: false,
        error: 'Email and password are required'
      }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/admin/login`;


    const backendResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
      cache: 'no-store',
    });

    const contentType = backendResponse.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
      const data: AuthApiResponse<LoginResponse> = await backendResponse.json();
      
      if (!backendResponse.ok) {
        return NextResponse.json({
          success: false,
          error: data.error || data.message || 'Login failed'
        }, { status: backendResponse.status });
      }
      
      const response = NextResponse.json(data);

      const setCookieHeader = backendResponse.headers.get('set-cookie');
      if (setCookieHeader) {
        response.headers.set('set-cookie', setCookieHeader);
      }

      return response;
    } else {
      const text = await backendResponse.text();
      
      return NextResponse.json({
        success: false,
        error: `Unexpected response from server (${backendResponse.status})`
      }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Connection to backend failed'
    }, { status: 500 });
  }
}
