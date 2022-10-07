import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerErrorInterceptor, LoggerModule } from 'nestjs-pino';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule, LoggerModule.forRoot()],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerErrorInterceptor,
    },
  ],
})
export class AppModule {}
