const engineer = require("../lib/Engineer");

describe("new engineer", () => {
  it("collects engineer name", () => {
    expect(engineer.name("Frodo")).toBe("Frodo");
  });

it("collects engineer id", () => {
  expect(engineer.id(22)).toBe(22);
});

it("collects engineer email", () => {
  expect(engineer.email("@email")).toBe("@email");
});

it("collects engineer role", () => {
  expect(engineer.role("Engineer")).toBe("Engineer");
});

it("allows multiple engineer to be added", () => {
  expect(engineer[i].length).toBe(engineer[i].length >= [1]);
});

});