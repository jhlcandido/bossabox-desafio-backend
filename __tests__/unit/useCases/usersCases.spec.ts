import { usersCases } from "../../../src/useCases";

describe("users cases test", () => {
  it("create user", async () => {
    const user = await usersCases.createUser({
      email: "jhlcandido@gmail.com",
      name: "Jonathan",
      password: "123",
    });

    expect(user.email).toBe("jhlcandido@gmail.com");
  });
  
});
