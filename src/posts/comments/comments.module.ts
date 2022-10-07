import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import CreateCommentUsecase from './usecase/create-comment.usecase';

const usecases = [CreateCommentUsecase];

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, ...usecases],
})
export class CommentsModule {}
