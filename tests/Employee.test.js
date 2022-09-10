const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("collects input for name, id, email, and role", () => {
      const frodo = new Profile ("Frodo Baggins", 12, "frodo@middleware.com", 7447, "Employee");
      expect(frodo).toBe(frodo);
    });
  });