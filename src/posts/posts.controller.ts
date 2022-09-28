import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import CreatePostUseCase from './usecase/create-post.usecase';
import UpdatePostUseCase from './usecase/update-post.usecase';
import FetchPostUseCase from './usecase/fetch-post.usecase';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly createPostUsecase: CreatePostUseCase,
    private readonly updatePostUsecase: UpdatePostUseCase,
    private readonly fetchPostUsecase: FetchPostUseCase,
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.createPostUsecase.handle(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fetchPostUsecase.handle(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.updatePostUsecase.handle(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
