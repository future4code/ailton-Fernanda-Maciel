import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async signup(req: Request, res: Response) {
    const { name, email, password, role } = req.body;

    const userBusiness = new UserBusiness();
  }
}
