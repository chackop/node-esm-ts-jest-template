import { testMethod } from "./testPackage.js";

describe("testPackage", () => {
  test("should first", () => {
    expect(testMethod()).toBeDefined();
  });
});
