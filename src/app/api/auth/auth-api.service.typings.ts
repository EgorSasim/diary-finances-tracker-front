export interface TokenDto {
  token: string;
}

export interface SignInDto {
  login: string;
  password: string;
}

export interface SignUpDto {
  login: string;
  email: string;
  password: string;
}

export interface AccessTokenDto {
  accessToken: string;
}
