import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import CreatePostUseCase from './usecase/create-post.usecase';
import UpdatePostUseCase from './usecase/update-post.usecase';
import FetchPostUseCase from './usecase/fetch-post.usecase';

const usecases = [CreatePostUseCase, UpdatePostUseCase, FetchPostUseCase];

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...usecases],
})
export class PostsModule {}
