import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
