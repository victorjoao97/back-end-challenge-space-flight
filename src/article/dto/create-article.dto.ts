export class CreateArticleDto {
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: ProviderDTO[];
  events: ProviderDTO[];
}

class ProviderDTO {
  id: string;
  provider: string;
}
