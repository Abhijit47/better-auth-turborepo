import { Controller, Get } from '@nestjs/common';
import { AllowAnonymous, OptionalAuth } from '@thallesp/nestjs-better-auth';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @OptionalAuth() // Allow anonymous access
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @OptionalAuth() // Allow anonymous access
  @Get('public')
  getPublic() {
    return { message: 'Public route' };
  }

  @AllowAnonymous()
  @Get('/auth/reference')
  getAuthReference() {}
}
