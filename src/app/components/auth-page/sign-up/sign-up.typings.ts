import { ConvertToForm } from '../../../common/typings/forms';

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export type SignUpForm = ConvertToForm<SignUp>;
