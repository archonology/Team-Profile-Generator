const Intern = require("../lib/Intern");

describe("new intern", () => {
  it("collects intern name", () => {
    const pip = new Intern("Pip", 33, "Pip@email", 9999, "U of MN Bootcamp");
    expect(pip.name).toBe("Pip");
  });

it("collects intern id", () => {
  const pip = new Intern("Pip", 33, "Pip@email", 9999, "U of MN Bootcamp");
  expect(pip.id).toBe(33);
});

it("collects intern email", () => {
  const pip = new Intern("Pip", 33, "Pip@email", 9999, "U of MN Bootcamp");
  expect(pip.email).toBe("Pip@email");
});

it("collects intern's school", () => {
  const pip = new Intern("Pip", 33, "Pip@email", 9999, "U of MN Bootcamp");
  expect(pip.school).toBe("U of MN Bootcamp");
});

it("collects intern role", () => {
  const pip = new Intern("Pip", 33, "Pip@email", 9999, "U of MN Bootcamp");
  expect(pip.role).toBe("Intern");
});

// it("allows multiple interns to be added", () => {
//   expect(pip[i].length).toBe([1]);
// });

});