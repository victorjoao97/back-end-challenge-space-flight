import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { RepositoryModule } from './repository/repository.module';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports: [RepositoryModule],
})
export class ArticleModule {}
