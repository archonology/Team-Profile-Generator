const Engineer = require("../lib/Engineer");

describe("new engineer", () => {
  it("collects engineer name", () => {
    expect(Engineer.name("Frodo")).toBe("Frodo");
  });

it("collects engineer id", () => {
  expect(Engineer.id(22)).toBe(22);
});

it("collects engineer email", () => {
  expect(Engineer.email("@email")).toBe("@email");
});

it("collects engineer role", () => {
  expect(Engineer.role("Engineer")).toBe("Engineer");
});

it("allows multiple engineer to be added", () => {
  expect(Engineer[i].length).toBe(Engineer[i].length >= [1]);
});

});