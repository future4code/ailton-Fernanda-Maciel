import { PostDatabase } from "../database/PostDatabase";
import {
  ICreatePostInputDTO,
  ICreatePostOutputDTO,
  IDeletePostInputDTO,
  Post,
} from "../models/Post";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public createPost = async (input: ICreatePostInputDTO) => {
    const { token, content } = input;
    const payload = this.authenticator.getTokenPayload(token);
    console.log(payload);
    if (!payload) {
      throw new Error("Não autenticado");
    }

    if (typeof content !== "string") {
      throw new Error("Parâmetro 'content' inválido");
    }

    if (content.length < 1) {
      throw new Error("Parâmetro 'content' inválido: mínimo de 1 caracteres");
    }

    const id = this.idGenerator.generate();

    const post = new Post(id, content, payload.id);

    await this.postDatabase.createPost(post);

    const response: ICreatePostOutputDTO = {
      message: "Post criado com sucesso",
      post,
    };

    return response;
  };

  public deletePost = async (input: IDeletePostInputDTO) => {
    const { token, postId } = input;

    const payload = this.authenticator.getTokenPayload(token);
    console.log(payload);
    if (!payload) {
      throw new Error("Não autenticado");
    }
    const postDB = await this.postDatabase.findPostById(postId);

    if (!postDB) {
      throw new Error("Post não encontrado.");
    }

    if (payload.role === USER_ROLES.NORMAL && postDB.user_id !== payload.id) {
      throw new Error("não é possível deletar post de outros usuarios");
    }
    await this.postDatabase.deletePost(postId);
    const response = {
      message: "Mensagem deletada com sucesso",
    };
    return response;
  };
}
