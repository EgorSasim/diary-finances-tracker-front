import { ConvertToForm } from '../../../typings/forms';

export interface SignUp {
  login: string;
  email: string;
  password: string;
}

export type SignUpForm = ConvertToForm<SignUp>;
