import {
    CanActivate,
    createParamDecorator,
    ExecutionContext,
    Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { firstValueFrom, timeout } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GqlAuthGuard implements CanActivate {
    constructor(private readonly auth: AuthService) {}

    async canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext<{ req: Request }>();
        const result = await firstValueFrom(
            this.auth.send({ cmd: 'login' }, req.headers).pipe(timeout(1000)),
        );
        console.log(`
bugwozi-blog/src/auth/auth.guard.ts:
result: ${JSON.stringify(result)}
--end
`);
        return true;
    }
}

export const GqlCurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req.user;
    },
);
