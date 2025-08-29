// api-key.guard.ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();  
    const apiKey = request.headers['x-api-key'];

    if (apiKey && apiKey === this.configService.get<string>('API_KEY')) {
      return true;
    }
    throw new UnauthorizedException();
  }
}
