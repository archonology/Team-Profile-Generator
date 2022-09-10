const Manager = require("../lib/Manager");

describe("new manager", () => {
  it("collects manager name", () => {
    expect(Manager.name("manager")).toBe("manager");
  });

it("collects manager id", () => {
  expect(Manager.id(22)).toBe(22);
});

it("collects manager email", () => {
  expect(Manager.email("@email")).toBe("@email");
});

it("collects manager role", () => {
  expect(Manager.role("Manager")).toBe("Manager");
});


it("only allows one manager to be added", () => {
  expect(Manager.length).toBe(0);
});

});


