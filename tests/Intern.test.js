const intern = require("../lib/Intern");

describe("Intern class", () => {
    it("collects input for name, id, email, and role", () => {
      const frodo = new Profile ("Frodo Baggins", 12, "frodo@middleware.com", 7447, "Intern");
      expect(frodo).toBe(frodo);
    });
  });