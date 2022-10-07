import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';

@Injectable()
export default class CreateCommentUsecase {
  handle(post: string, createCommentDto: CreateCommentDto) {
    return `Adding comment to post #${post}`;
  }
}
