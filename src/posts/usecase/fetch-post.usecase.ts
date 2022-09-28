import { Injectable } from '@nestjs/common';

@Injectable()
export default class FetchPostUseCase {
  handle(id: number) {
    return `This action fetch a #${id} post`;
  }
}
