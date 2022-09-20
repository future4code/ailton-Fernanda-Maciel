import { User } from "../models/User";
import { BaseDataBase } from "./BaseDatabase";

export class UserDatabase extends BaseDataBase {
  public static TABLE_USERS = "Arq_Users";

  async userEmail(email: string): Promise<User | undefined> {
    const result = await this.getConnetion()
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ email });
    if (!result.length) {
      return undefined;
    }

    return new User(
      result[0].id,
      result[0].nome,
      result[0].email,
      result[0].senha,
      result[0].role
    );
  }
}
