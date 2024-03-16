import { ConvertToForm } from '../../../typings/forms';

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export type SignUpForm = ConvertToForm<SignUp>;
