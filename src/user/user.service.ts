import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutUserDTO } from './dto/update-put-user-dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CreateUserDTO) {
    // return this.prisma.user.create({
    //   data: {
    //     name: user.name,
    //     email: user.email,
    //     password: user.password,
    //   },
    //   select: {
    //     id: true,
    //   },

    // return this.prisma.user.create({
    //   data: {
    //     name: user.name,
    //     email: user.email,
    //     password: user.password,
    //   },
    // });

    user.password = await this.encryptPassord(user.password);

    return this.prisma.user.create({
      data: user,
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, user: UpdatePutUserDTO) {
    await this.exists(id);

    user.password = await this.encryptPassord(user.password);

    return this.prisma.user.update({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      where: {
        id,
      },
    });
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
      return this.prisma.user.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      throw new BadRequestException('Atributos informados inválidos.');
    }
  }

  async delete(id: number) {
    await this.exists(id);

    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async exists(id: number) {
    if (!(await this.prisma.user.count({ where: { id } }))) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  async encryptPassord(password) {
    const salt = await bcrypt.genSalt();

    return bcrypt.hash(password, salt);
  }
}
