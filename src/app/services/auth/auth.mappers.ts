import { SignInDto, SignUpDto } from '../../api/auth/auth-api.service.typings';
import { SignIn } from '../../modules/auth-page/sign-in/sign-in.typings';
import { SignUp } from '../../modules/auth-page/sign-up/sign-up.typings';

export function mapSignUpDataToDto(signUpData: SignUp): SignUpDto {
  return signUpData;
}

export function mapSignInDataToDto(signInData: SignIn): SignInDto {
  return signInData;
}
