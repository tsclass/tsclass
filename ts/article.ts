import { TscAuthor } from './author'

export class TscArticle {
    /**
     * the title of an article
     */
    title: string
    
    /**
     * the Author of an article
     */
    author: TscAuthor

    /**
     * the content of an article
     */
    content: string

    /**
     * the tags of an article
     */
    tags: string[]
}