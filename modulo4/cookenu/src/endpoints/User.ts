import { Request, response, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserEndpoint {
  public async createUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        throw new Error("Todos os campos são obrigatórios!!");
      }

      const userDataBase = new UserDatabase();

      // gerar id
      const id = new GenerateId().createId();

      // gerar o hash da senha

      const hashSenha = await new HashManager().hashDaSenha(password);
      const user = new User(id, name, email, hashSenha);
      const response = await userDataBase.createUser(user);

      // gerar token do usuario

      const token = new Authenticator().generate({ id });
      res.status(201).send({ message: response, token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error("Valores devem ser passados");
      }
      const userData = new UserDatabase();

      const emailExist = await userData.getUserByEmail(email);
      console.log(emailExist);

      if (!emailExist) {
        throw new Error("As informações estão incorretas");
      }

      const correctPassword = await new HashManager().compare(
        password,
        emailExist.getPassword()
      );

      if (!correctPassword) {
        throw new Error("A senha esta incorreta");
      }

      const token = new Authenticator().generate({
        id: emailExist.getId(),
      });

      res.status(200).send({ message: "usuario logado com sucesso", token });
    } catch (error: any) {
      res.status(error.StatusCode || 500).send({ message: error.message });
      console.log(error);
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const authenticator = new Authenticator();

      if (!token) {
        throw new Error("É necessário passar a autorização ");
      }

      const tokenData = authenticator.getTokenData(token);

      if (!tokenData.id) {
        throw new Error("Necessario passar id!!");
      }

      const userDataBase = new UserDatabase();

      const user = await userDataBase.pegarUsuario(tokenData.id);

      res.status(200).send({ message: user });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async pegarOutroPerfil(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const idOutraPessoa = req.params.id;

      if (!token) {
        throw new Error("É necessário passar a autorização ");
      }

      const userData = new UserDatabase();
      const procurarPessoa = await userData.getUser(idOutraPessoa);
      console.log(procurarPessoa);
      res.status(200).send({ message: procurarPessoa });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}
