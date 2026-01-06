export interface User {
  id: number;
  email: string;
  name?: string;
  role?: string;
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

export interface UsersApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: Pagination;
}

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  role: string;
}
