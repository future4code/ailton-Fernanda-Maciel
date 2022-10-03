import { Request, Response } from "express";
import { request } from "http";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      const input: ISignupInputDTO = {
        name,
        email,
        password,
      };
      const response = await this.userBusiness.signup(input);
      res.status(201).send({ message: "cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.status || 500).send({ message: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const input: ILoginInputDTO = {
        email,
        password,
      };
      const response = await this.userBusiness.login(input);
      res.status(201).send({ message: "cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.status || 500).send({ message: error.message });
    }
  };
}
