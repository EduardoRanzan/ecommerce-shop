export interface CredentialsDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface UserResponseDto {
    id: string;
    name: string;
    email: string;
    supabaseId: string;
}

export interface AuthResponseDto {
    acessToken: string;
    user: UserResponseDto;
}