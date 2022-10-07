import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import sentry from 'config/sentry';
import { LoggerErrorInterceptor, LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { SentryInterceptor } from './sentry.interceptor';

@Module({
  imports: [
    PostsModule,
    LoggerModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true, load: [sentry] }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerErrorInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: SentryInterceptor,
    },
  ],
})
export class AppModule {}
