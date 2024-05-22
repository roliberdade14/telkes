export interface PostsDB {
    id: string,
    text_post: string
}

export interface idUserIdPostsDB {
    user_id: string,
    post_id: string
}

export interface inputCreatePost {
    idUser: string
    textPost: string
}

export interface CreatePostOutputDTO {
    message: string,
    postDB: PostsDB
}

export type postsDTO = PostsDB[] | undefined

export type idPostUser = idUserIdPostsDB[] | undefined