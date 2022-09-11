const Manager = require("../lib/Manager");

describe("new manager", () => {
  it("collects manager name", () => {
    const bilbo = new Manager("Bilbo", 111, "Bilbo@email", 7447);
    expect(bilbo.name).toBe("Bilbo");
  });

it("collects manager id", () => {
  const bilbo = new Manager("Bilbo", 111, "Bilbo@email", 7447);
  expect(bilbo.id).toBe(111);
});

it("collects manager email", () => {
  const bilbo = new Manager("Bilbo", 111, "Bilbo@email", 7447);
  expect(bilbo.email).toBe("Bilbo@email");
});

it("collects manager office phone", () => {
  const bilbo = new Manager("Bilbo", 111, "Bilbo@email", 7447);
  expect(bilbo.officeNumber).toBe(7447);
});

it("collects manager role", () => {
  const bilbo = new Manager("Bilbo", 111, "Bilbo@email", 7447);
  expect(bilbo.role).toBe("Manager");
});


// it("only allows one manager to be added", () => {
//   expect(Manager.length).toBe(0);
});

// });


