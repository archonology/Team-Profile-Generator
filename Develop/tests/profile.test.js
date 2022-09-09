const Profile = require("../profile");

describe("Profile class", () => {
    it("inputs name, id, email, phone, and position", () => {
      const frodo = new Profile ("Frodo Baggins", 12, "ringbearer@middleware.com", 9995557447, "Intern");
      expect(frodo.name).toBe("Frodo Baggins");
    });
  });