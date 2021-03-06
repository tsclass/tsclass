import { IDate } from '..';
import { IArticle } from '..';

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
  birthday: IDate;

  /**
   * articles of an author
   */
  articles: IArticle[];
}
