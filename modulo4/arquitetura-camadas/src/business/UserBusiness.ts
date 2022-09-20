import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  async signup(user: User): Promise<string> {
    const { name, email, password, role } = User;

    if (!name || !email || !password || !role) {
      throw new Error("Todos os dados são obrigatórios");
    }

    if (name.length < 3) {
      throw new Error("O no me precisa ter mais de 3 caracteres");
    }
    if (password.length < 6) {
      throw new Error("A senha deve possuir mais de 6 caracteres");
    }

    const userDatabase = new UserDatabase();

    const userEmail = await userDatabase.userEmail(email);

    if (userEmail) {
      throw new Error("Email ja cadastrado");
    }

    // -------------------------------- //

    const id = new IdGenerator().generate();

    const hashPassword = await new HashManager().hash(password);

    const user1 = new User(id, name, email, hashPassword, role);

    const response = await userDatabase.userEmail(email);

    const token = new Authenticator().generateToken({ id, role });

    return token;
  }
}
