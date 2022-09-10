const manager = require("../lib/Manager");

describe("new manager", () => {
  it("collects manager name", () => {
    expect(manager.name("Frodo")).toBe("Frodo");
  });

it("collects manager id", () => {
  expect(manager.id(22)).toBe(22);
});

it("collects manager email", () => {
  expect(manager.email("@email")).toBe("@email");
});

it("collects manager role", () => {
  expect(manager.role("Manager")).toBe("Manager");
});


it("only allows one manager to be added", () => {
  expect(manager.length).toBe(0);
});

});


