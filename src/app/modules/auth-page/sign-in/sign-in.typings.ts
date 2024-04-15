import { ConvertToForm } from '../../../typings/forms';

export interface SignIn {
  login: string;
  password: string;
}

export type SignInForm = ConvertToForm<SignIn>;
