const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
   it("returns a hashed value based on sha-256 algorithm", () => {
      // because the same input always gives the same output
      expect(cryptoHash("foo")).toEqual(
         "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"
      );
   });

   it("returns the same output regardless of order", () => {
      expect(cryptoHash("a", "b")).toEqual(cryptoHash("b", "a"));
   });
});
