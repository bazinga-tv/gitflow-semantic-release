import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import CreateCommentUsecase from './usecase/create-comment.usecase';

@Controller('posts/:post/comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    readonly createCommentUsecase: CreateCommentUsecase,
  ) {}

  @Post()
  create(
    @Param('post') post: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    throw new Error('Custom failure');
    return this.createCommentUsecase.handle(post, createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
