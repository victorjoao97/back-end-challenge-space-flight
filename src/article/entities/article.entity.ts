export class Article {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: Provider[];
  events: Provider[];
}

class Provider {
  id: string;
  provider: string;
}
