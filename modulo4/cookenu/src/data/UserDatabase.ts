import { User } from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User): Promise<string> {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      })
      .into("user_cookenu");
    return `Usuario ${user.getName()} cadastrado com sucesso!!!`;
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from("user_cookenu")
      .where({ email: email });

    if (!result.length) {
      return undefined;
    }
    console.log(result);
    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password
    );
  }
}
