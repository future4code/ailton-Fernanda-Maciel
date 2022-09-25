import { UserDatabase } from "../database/UserDatabase";
import {
  ILoginInputDTO,
  ISignupInputDTO,
  ISignupOutputDTO,
  ITokenPayload,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator } from "../services/Authenticator";
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
      throw new Error("Parametro name invalido");
    }

    if (typeof email !== "string") {
      throw new Error("Parametro email invalido");
    }

    if (typeof password !== "string") {
      throw new Error("Parametro password invalido");
    }
    if (name.length < 3) {
      throw new Error("O nome precisa ter no minimo 3 caracteres");
    }
    if (password.length < 6) {
      throw new Error("A senha precisa ter no minimo 6 caracteres");
    }

    // validação de email, utiliza o regex // match
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }
    console.log(input);

    const isEmailAlreadyExist = await this.userDatabase.findByEmail(email);
    if (isEmailAlreadyExist) {
      throw new Error("Email já cadastrado!!");
    }

    const id = this.idGenerator.generate();
    const hashPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };
    const token = this.authenticator.generateToken(payload);
    const response: ISignupOutputDTO = {
      message: `Usuario ${user.getName()} cadastrado com sucesso`,
      token,
    };
    return response;
  };
  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (typeof email !== "string") {
      throw new Error("Parametro email invalido");
    }

    if (typeof password !== "string") {
      throw new Error("Parametro password invalido");
    }

    if (password.length < 6) {
      throw new Error("A senha precisa ter no minimo 6 caracteres");
    }

    // validação de email, utiliza o regex // match
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }
    console.log(input);

    const userDB = await this.userDatabase.findByEmail(email);
    if (!userDB) {
      throw new Error("Email não cadastrado");
    }

    //
    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );
    await this.userDatabase.createUser(user);

    if (!isPasswordCorrect) {
      throw new Error("password incorrect");
    }
    //gerar token
    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };
    const token = this.authenticator.generateToken(payload);
    const response: ISignupOutputDTO = {
      message: `Usuario ${user.getName()}logado com sucesso`,
      token,
    };
    return response;
  };
}
