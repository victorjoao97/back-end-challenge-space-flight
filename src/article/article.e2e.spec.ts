import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { RepositoryService } from './repository/repository.service';
import * as request from 'supertest';
import { ArticleModule } from './article.module';

describe('Article End-to-End', () => {
  let app: INestApplication;
  const articleRepository = { findAll: () => [{ id: 1, title: 'testing' }] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ArticleModule],
    })
      .overrideProvider(RepositoryService)
      .useValue(articleRepository)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/GET articles', () => {
    return request(app.getHttpServer())
      .get('/articles')
      .expect(200)
      .expect([{ id: 1, title: 'testing' }]);
  });

  afterAll(async () => {
    await app.close();
  });
});
