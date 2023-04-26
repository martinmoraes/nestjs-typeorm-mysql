import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { userRepositoryMock } from '../testing/user-repository.mock';
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { userServiceMock } from '../testing/user-service.mock';
import { mailerServiceMock } from '../testing/mailer-service.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { accessToken } from '../testing/access-token.mock';
import { jwtPayload } from '../testing/jwt-payload.mock';
import { resetToken } from '../testing/reset-token.mock';
import { authRegisterDTO } from '../testing/auth-register-dto.mock';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        userRepositoryMock,
        jwtServiceMock,
        userServiceMock,
        mailerServiceMock,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('Validar a definição', () => {
    expect(authService).toBeDefined();
  });

  describe('Token', () => {
    it('createToken method', () => {
      const result = authService.createToken(userEntityList[0]);

      expect(result).toEqual({ accessToken });
    });

    it('checkToken method', () => {
      const payload = authService.checkToken(accessToken);

      expect(payload).toEqual(jwtPayload);
    });

    it('isValidToken method', () => {
      const payload = authService.isValidToken(accessToken);

      expect(payload).toEqual(true);
    });
  });

  describe('Autenticação', () => {
    it('login method', async () => {
      const email = 'camila@gmail.com';
      const password = '123456Aa!';
      const result = await authService.login(email, password);

      expect(result).toEqual({ accessToken });
    });

    it('forget method', async () => {
      const email = 'camila@gmail.com';

      const result = await authService.forget(email);

      expect(result).toEqual(true);
    });

    it('reset method', async () => {
      const password = '123456Aa!';
      const result = await authService.reset(password, resetToken);

      expect(result).toEqual({ accessToken });
    });

    it('register method', async () => {
      const result = await authService.register(authRegisterDTO);

      expect(result).toEqual({ accessToken });
    });
  });
});
