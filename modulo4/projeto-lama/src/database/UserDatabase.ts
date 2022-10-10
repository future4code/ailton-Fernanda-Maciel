import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Lama_Users";

  public toUserDBModel = (user: User): IUserDB => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    return userDB;
  };

  public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    const resultado: IUserDB[] = await BaseDatabase.connection(
      UserDatabase.TABLE_USERS
    )
      .select()
      .where({ email });

    return resultado[0];
  };

  public createUser = async (user: User) => {
    const userDB = this.toUserDBModel(user);
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };
}
