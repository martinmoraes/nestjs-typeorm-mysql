import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    id: 1,
    name: 'Mariana Morães',
    email: 'mariana@gmail.com',
    password: '$2b$10$TrjpJhOL0E0WmB0IKdoDju/sr92uBkpq8RFOU98JOJCUdDS34o/D6',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Mandirituba Morães',
    email: 'mandi3@gmail.com',
    password: '$2b$10$U.B0x3SBSWSOGeVG2vdLLeJseGTLeu3Hx7J9DO7.LfZMVX3G5gn1a',
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Martin Morães',
    email: 'martin@gmail.com',
    password: '$2b$10$U.B0x3SBSWSOGeVG2vdLLeJseGTLeu3Hx7J9DO7.LfZMVX3G5gn1a',
    role: Role.User,
  },
];
