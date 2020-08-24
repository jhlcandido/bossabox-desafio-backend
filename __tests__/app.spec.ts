import app from "../src/app";

describe("app testes", () => {
  it("app initialized", () => {
    expect(app !== null).toEqual(true);
  });
});
