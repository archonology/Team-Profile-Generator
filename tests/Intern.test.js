const Intern = require("../lib/Intern");

describe("new intern", () => {
  it("collects intern name", () => {
    expect(Intern.name("intern1")).toBe("intern1");
  });

it("collects intern id", () => {
  expect(Intern.id("id1")).toBe("id1");
});

it("collects intern email", () => {
  expect(Intern.email("1@email")).toBe("1@email");
});

it("collects intern role", () => {
  expect(Intern.role("Intern")).toBe("Intern");
});

it("allows multiple interns to be added", () => {
  expect(Intern[i].length).toBe([1]);
});

});