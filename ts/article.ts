import { IAuthor } from './author'

export interface IArticle {
  /**
   * the title of an article
   */
  title: string

  /**
   * the Author of an article
   */
  author: IAuthor

  /**
   * the content of an article
   */
  content: string

  /**
   * the tags of an article
   */
  tags: string[]
}