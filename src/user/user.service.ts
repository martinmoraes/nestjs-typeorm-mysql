import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { UpdatePutUserDTO } from './dto/update-put-user-dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user-dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(user: CreateUserDTO) {
    const exist = await this.usersRepository.exist({
      where: {
        email: user.email,
      },
    });
    if (exist) {
      throw new BadRequestException('Este e mail já está em uso.');
    }

    user.password = await this.encryptPassord(user.password);

    const userCreated = this.usersRepository.create(user);

    return this.usersRepository.save(userCreated);
  }

  async list() {
    return this.usersRepository.find();
  }

  async show(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, user: UpdatePutUserDTO) {
    await this.exists(id);

    user.password = await this.encryptPassord(user.password);

    await this.usersRepository.update(id, {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });

    return this.show(id);
  }

  async updatePartial(id: number, dataOrigin: UpdatePatchUserDTO) {
    await this.exists(id);

    const data: UpdatePatchUserDTO = {};
    for (const key in dataOrigin) {
      if (key === 'password') {
        data[key] = await this.encryptPassord(dataOrigin[key]);
      } else {
        data[key] = dataOrigin[key];
      }
    }

    try {
      await this.usersRepository.update(id, data);
    } catch (error) {
      throw new BadRequestException('Atributos informados inválidos.');
    }

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    return this.usersRepository.delete(id);
  }

  async exists(id: number) {
    if (
      !(await this.usersRepository.exist({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  async encryptPassord(password) {
    const salt = await bcrypt.genSalt();

    return bcrypt.hash(password, salt);
  }
}
