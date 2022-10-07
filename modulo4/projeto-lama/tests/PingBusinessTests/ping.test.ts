import { PingBusiness } from "../../src/business/PingBusiness";
import { describe, expect, test } from "@jest/globals";

describe("Testing PingBusiness", () => {
  const pingBusiness = new PingBusiness();
  // não possui dependências

  test("deve retornar 'Pong!' em caso de sucesso", async () => {
    const response = await pingBusiness.ping();
    expect(response.message).toBe("Pong!");
  });
});
