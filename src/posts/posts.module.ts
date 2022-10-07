import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { CommentsModule } from './comments/comments.module';
import CreatePostUseCase from './usecase/create-post.usecase';
import UpdatePostUseCase from './usecase/update-post.usecase';
import FetchPostUseCase from './usecase/fetch-post.usecase';
import FetchAllPostsUseCase from './usecase/fetch-all-posts.usecase';

const usecases = [
  CreatePostUseCase,
  UpdatePostUseCase,
  FetchPostUseCase,
  FetchAllPostsUseCase,
];

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...usecases],
  imports: [CommentsModule],
})
export class PostsModule {}
