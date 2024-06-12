export interface AuthResponse<T> {
    response?: T;
    status: number;
    message?: string;
  }