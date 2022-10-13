import { UserBusiness } from "../src/business/UserBusiness";
import { ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "../tests/AuthenticatorMock";
import { HashManagerMock } from "../tests/HashManagerMock";
import { IdGeneratorMock } from "../tests/IdGeneratorMock";
import { UserDatabaseMock } from "../tests/UserDatabaseMock";
import { describe, expect, test } from "@jest/globals";

describe("Testando o método signup da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      email: "teste@gmail.com",
      name: "Teste",
      password: "teste123",
    };

    const response = await userBusiness.signup(input);
    expect(response.message).toBe("Cadastro realizado com sucesso");
    expect(response.token).toBe("token-mock-normal");
  });
});
