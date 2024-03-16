import { ConvertToForm } from '../../../typings/forms';

export interface SignIn {
  email: string;
  password: string;
}

export type SignInForm = ConvertToForm<SignIn>;
