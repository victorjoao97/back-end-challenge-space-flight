import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { RepositoryModule } from './repository/repository.module';
import { RepositoryService } from './repository/repository.service';

describe('ArticleController', () => {
  let controller: ArticleController;
  let repository: RepositoryService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [ArticleService],
      imports: [RepositoryModule],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
    repository = module.get<RepositoryService>(RepositoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be findAll return mock', () => {
    jest.spyOn(repository, 'findAll').mockImplementation(() => []);
    expect(controller.findAll()).toHaveLength(0);
  });
});
