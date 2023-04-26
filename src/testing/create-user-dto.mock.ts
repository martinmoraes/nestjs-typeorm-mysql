import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user-dto';

export const createUserDTO: CreateUserDTO = {
  email: 'martin@gmail.com',
  name: 'Martin Morães',
  password: '123456!Aa',
  role: Role.User,
};
