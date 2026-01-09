export interface User {
  id: number;
  email: string;
  name?: string;
  role?: string;
  ip_address?: string;
  created_at: string;
  updated_at?: string;
}

export interface AuthApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface QuizResult {
  id: number;
  question1: number;
  question2: number;
  question3: number;
  question4: number;
  playlist_id: string;
  ip_address?: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: Pagination;
}

export type UsersApiResponse<T> = ApiResponse<T>;
export type QuizApiResponse<T> = ApiResponse<T>;

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Song {
  name: string;
  duration: string; // Format: "3:37"
}

export interface PlatformLinks {
  spotify?: string;
  gaana?: string;
  jiosaavn?: string;
  amazon?: string;
}

export interface Playlist {
  id: string;
  title: string;
  cover_image: string; // URL or path to the playlist cover image
  songs: Song[];
  platform_links: PlatformLinks;
  created_at?: string;
  updated_at?: string;
}
