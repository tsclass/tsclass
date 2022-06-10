import { IArticle } from "./article.js";
export interface IDocumentationSet {
  id: string;
  creationTimestamp: number;
  articles: IArticle[];
}