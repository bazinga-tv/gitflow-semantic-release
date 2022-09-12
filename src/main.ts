import { NestFactory } from '@nestjs/core';
import * as apm from 'elastic-apm-node';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  apm.start({
    serverUrl: 'http://apm.local',
    environment: 'local',
  });

  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));

  await app.listen(3000);
}
bootstrap();
