import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { RepositoryService } from './repository/repository.service';

@Injectable()
export class ArticleService {
  constructor(private repositoryArticle: RepositoryService) {}
  create(createArticleDto: CreateArticleDto) {
    return this.repositoryArticle.create(createArticleDto);
  }

  findAll() {
    return this.repositoryArticle.findAll();
  }

  findOne(id: number) {
    return this.repositoryArticle.findOne(id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.repositoryArticle.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.repositoryArticle.remove(id);
  }
}
