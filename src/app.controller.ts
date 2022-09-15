import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/greet/:greet')
  getHello(@Param('greet') greet: string = 'World'): string {
    return this.appService.getHello(greet);
  }
}
