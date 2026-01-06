import { NextRequest, NextResponse } from 'next/server';
import { User, UsersApiResponse } from '../../../types';

type CreateUserRequest = {
  email: string;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/users?page=${page}&limit=${limit}`;

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

    const data: UsersApiResponse<User[]> = await backendResponse.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const response: UsersApiResponse<never> = {
      success: false,
      error: 'Failed to fetch users',
    };

    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateUserRequest = await request.json();
    const { email } = body;

    if (!email) {
      const response: UsersApiResponse<never> = {
        success: false,
        error: 'Email is required',
      };
      return NextResponse.json(response, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const response: UsersApiResponse<never> = {
        success: false,
        error: 'Invalid email format',
      };
      return NextResponse.json(response, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/v1';
    const url = `${baseUrl}/users`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const backendResponse = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email }),
      cache: 'no-store',
    });

    const data: UsersApiResponse<User> = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data.error || 'Failed to create user',
        },
        { status: backendResponse.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {

    const response: UsersApiResponse<never> = {
      success: false,
      error: 'Failed to create user',
    };

    return NextResponse.json(response, { status: 500 });
  }
}
