import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from '../dto/update-post.dto';

@Injectable()
export default class UpdatePostUseCase {
  handle(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }
}
