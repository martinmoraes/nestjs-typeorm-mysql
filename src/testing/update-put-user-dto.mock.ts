import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user-dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  email: 'martin@gmail.com',
  name: 'Martin Morães',
  password: '123456!Aa',
  role: Role.User,
};
