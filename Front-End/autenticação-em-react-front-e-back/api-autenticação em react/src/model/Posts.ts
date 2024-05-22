import { PostsDB } from "../dtos/posts/post.dto"

export interface PostModel {
    id: string,
    created_at: string,
    text_post: string
}

export class Post {

    constructor(
        private id: string,
        private text_post: string

    ) { }

    public getId(): string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getText_post(): string {
        return this.text_post
    }

    public setText_post(value: string): void {
        this.text_post = value
    }

    public toDBModel(): PostsDB {
        return {
            id: this.id,
            text_post: this.text_post
        }
    }
}