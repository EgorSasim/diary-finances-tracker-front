import { UserDto } from '../../api/user/user-api.typings';
import { User } from './user.typings';

export function mapUserDtoToData(userDto: UserDto): User {
  return userDto;
}
