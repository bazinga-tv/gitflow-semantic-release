import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(greeting: string = 'World'): string {
    return `Hello ${greeting}!`;
  }
}
