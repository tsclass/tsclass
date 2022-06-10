import { IArticle } from './article.js';

/**
 * a set of articles that together form a body of documentation
 */
export interface IDocumentationSet {
  id: string;
  creationTimestamp: number;
  articles: IArticle[];
}
