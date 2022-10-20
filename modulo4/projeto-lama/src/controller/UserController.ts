import { Request, Response } from "express";

import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.signup(input);
      res.status(201).send(response);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
      console.log(error);
    }
  };
}
