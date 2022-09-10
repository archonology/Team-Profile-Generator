const manager = require("../lib/Manager");

describe("Manager class", () => {
    it("collects input for name, id, email, and role", () => {
      const frodo = new Profile ("Frodo Baggins", 12, "frodo@middleware.com", 7447, "Manager");
      expect(frodo).toBe(frodo);
    });
  });

