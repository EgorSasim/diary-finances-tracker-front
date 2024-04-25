import { ConvertToForm } from '../../typings/forms';

export interface User {
  name: string;
  email: string;
}

export interface UserEdit extends Omit<User, 'name'> {
  oldPassword: string;
  newPassword: string;
}

export type UserEditForm = ConvertToForm<UserEdit>;
