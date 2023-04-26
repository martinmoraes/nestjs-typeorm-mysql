import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { userRepositoryMock } from '../testing/user-repository.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { createUserDTO } from '../testing/create-user-dto.mock';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { updatePatchUserDTO } from '../testing/update-patch-user-dto.mock';
import { updatePutUserDTO } from '../testing/update-put-user-dto.mock';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, userRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  it('Validar a definição', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('Create', () => {
    it('method create', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);
      const userCreated = await userService.create(createUserDTO);

      expect(userCreated).toEqual(userEntityList[0]);
    });
  });

  describe('Read', () => {
    it('method list', async () => {
      const userList = await userService.list();

      expect(userList).toEqual(userEntityList);
    });

    it('method show', async () => {
      const userId = 56;
      const user = await userService.show(userId);

      expect(user).toEqual(userEntityList[0]);
    });
  });

  describe('Update', () => {
    it('method update', async () => {
      const userId = 56;
      const user = await userService.update(userId, updatePutUserDTO);

      expect(user).toEqual(userEntityList[0]);
    });

    it('method updatePartial', async () => {
      const userId = 56;
      const user = await userService.updatePartial(userId, updatePatchUserDTO);

      expect(user).toEqual(userEntityList[0]);
    });
  });

  describe('Delete', () => {
    it('method delete', async () => {
      const userId = 56;
      const affected = await userService.delete(userId);
      expect(affected).toEqual(true);
    });
  });
});
