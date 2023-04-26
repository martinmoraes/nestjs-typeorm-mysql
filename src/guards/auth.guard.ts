import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const tokenPayload = this.authService.checkToken(
        (authorization ?? '').split(' ')[1],
      );

      request.tokenPayload = tokenPayload;

      request.user = await this.userService.show(tokenPayload.id);

      return true;
    } catch (error) {
      return false;
    }
  }
}
