import { UserDatabase } from "../database/UserDatabase";
import {
  ILoginOutputDTO,
  ISignupInputDTO,
  ISignupOutputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  public signup = async (input: ISignupInputDTO) => {
    const { name, email, password } = input;

    if (typeof name !== "string") {
      throw new Error("Nome invalido!");
    }
    if (typeof email !== "string") {
      throw new Error("Email no formato invalido!!");
    }

    if (typeof password !== "string") {
      throw new Error("Password no formato invalido!!");
    }

    if (name.length < 3) {
      throw new Error("O nome deve possuir mais de 3 caracteres!");
    }
    if (password.length < 6) {
      throw new Error("A senha deve possui mais de 6 caracteres!");
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new Error("Email no formato invalido!!");
    }

    //verifica se já existe o email no banco de dados.
    const emailJaExiste = await this.userDatabase.findByEmail(email);

    if (emailJaExiste) {
      throw new Error("Email já cadastrado");
    }
    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword, USER_ROLES.NORMAL);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };
    const token = this.authenticator.generateToken(payload);

    const response: ISignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token,
    };
    return response;
  };
}
