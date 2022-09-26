import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export default class CreatePostUseCase {
  handle(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }
}
