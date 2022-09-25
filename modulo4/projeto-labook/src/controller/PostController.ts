import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInputDTO, IDeletePostInputDTO } from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  public createPost = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const content = req.body.content;

      const input: ICreatePostInputDTO = {
        token,
        content,
      };
      const response = await this.postBusiness.createPost(input);
      console.log(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };

  public deletePost = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.body.id;

      const input: IDeletePostInputDTO = {
        token,
        postId: id,
      };
      const response = await this.postBusiness.deletePost(input);
      console.log(response);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };
}
