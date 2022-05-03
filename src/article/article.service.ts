import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  data: Article[];
  id: number;
  constructor() {
    this.data = [];
    this.id = 1;
  }
  create(createArticleDto: CreateArticleDto) {
    this.data.push(Object.assign(createArticleDto, { id: this.id++ }));
  }

  findAll() {
    return this.data;
  }

  findOne(id: number) {
    return this.data.find((d) => d.id === id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    const index = this.data.findIndex((d) => d.id === id);
    if (index < 0) return;
    return Object.assign(this.data[index], updateArticleDto);
  }

  remove(id: number) {
    const index = this.data.findIndex((d) => d.id === id);
    if (index < 0) return;
    this.data.splice(index, 1);
  }
}
