import { content } from '..';

export interface IArticle {
  /**
   * the main url of an article
   */
  url: string;

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
   * the mainimage of the article
   */
  featuredImageUrl: string;

  /**
   * a timestamp for when the article was written
   */
  timestamp: number;

  /**
   * the tags of an article
   */
  tags: string[];
}
