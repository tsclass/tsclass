import { general, content } from '..';

export interface IAuthor {
  /**
   * the first name of an author
   */
  firstName: string;

  /**
   * the surname of an author
   */
  surName: string;

  /**
   * the birthday of an author
   */
  birthday: general.IDate;

  /**
   * articles of an author
   */
  articles: content.IArticle[];
}
