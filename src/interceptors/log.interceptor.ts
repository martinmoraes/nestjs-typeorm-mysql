import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      tap(() => {
        const request = context.switchToHttp().getRequest();
        // console.log({
        //   url: request.url,
        //   bory: request.body,
        //   params: request.params,
        //   reuntime: `${Date.now() - dt} milisegundos.`,
        // });
      }),
    );
  }
}
