import { TscDate } from './date'
import { TscArticle } from './article'

export class TscAuthor {

    /**
     * the first name of an author
     */
    firstName: string

    /**
     * the surname of an author
     */
    surName: string

    /**
     * the birthday of an author
     */
    birthday: TscDate

    /**
     * articles of an author
     */
    articles: TscArticle
}