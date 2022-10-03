import { IPostDB, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public toPostDBModel = (post: Post) => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };

    return postDB;
  };

  public createPost = async (post: Post) => {
    const postDB = this.toPostDBModel(post);

    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(postDB);
  };

  public findPostById = async (id: string) => {
    const result: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    )
      .select()
      .where({ id });
    return result[0];
  };

  public deletePost = async (id: string) => {
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
      .delete()
      .where({ id });
  };
}
