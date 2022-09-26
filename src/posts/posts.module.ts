import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import CreatePostUseCase from './usecase/create-post.usecase';

const usecases = [CreatePostUseCase];

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...usecases],
})
export class PostsModule {}
