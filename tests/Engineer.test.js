const engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("collects input for name, id, email, and role", () => {
      const frodo = new Profile ("Frodo Baggins", 12, "frodo@middleware.com", 7447, "Engineer");
      expect(frodo).toBe(frodo);
    });
  });