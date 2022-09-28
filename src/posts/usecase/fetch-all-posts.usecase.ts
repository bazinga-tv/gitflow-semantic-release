import { Injectable } from '@nestjs/common';

@Injectable()
export default class FetchAllPostsUseCase {
  handle() {
    return `This action fetch all posts`;
  }
}
