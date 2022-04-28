import { content } from '../index.js';

export interface IArticle<T = any> {
  /**
   * the main url of an article
   */
  url?: string;

  /**
   * the mainimage of the article
   */
  featuredImageUrl?: string;

  referenceObject?: T;

  /**
   * the title of an article
   */
  title: string;

  /**
   * the Author of an article
   */
  author: content.IAuthor;

  /**
   * the content of an article
   */
  content: string;

  /**
   * a timestamp for when the article was written
   */
  timestamp: number;

  /**
   * the tags of an article
   */
  tags: string[];
}
