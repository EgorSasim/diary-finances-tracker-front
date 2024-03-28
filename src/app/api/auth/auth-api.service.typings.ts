export interface TokenDto {
  token: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  name: string;
  email: string;
  password: string;
}

export interface AccessTokenDto {
  accessToken: string;
}
