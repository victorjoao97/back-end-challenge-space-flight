import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { RepositoryService } from './repository/repository.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, RepositoryService],
})
export class ArticleModule {}
