const intern = require("../lib/Intern");

describe("new intern", () => {
  it("collects intern name", () => {
    expect(intern.name("intern1")).toBe("intern1");
  });

it("collects intern id", () => {
  expect(intern.id("id1")).toBe("id1");
});

it("collects intern email", () => {
  expect(intern.email("1@email")).toBe("1@email");
});

it("collects intern role", () => {
  expect(intern.role("Intern")).toBe("Intern");
});

it("allows multiple interns to be added", () => {
  expect(interns[i].length).toBe([1]);
});

});