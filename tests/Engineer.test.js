const Engineer = require("../lib/Engineer");

describe("new engineer", () => {
  it("collects engineer name", () => {
    const gandalf = new Engineer("Gandalf", 9, "Gandalf@email", 2222, "wizardGrey");
    expect(gandalf.name).toBe("Gandalf");
  });

it("collects engineer id", () => {
  const gandalf = new Engineer("Gandalf", 9, "Gandalf@email", 2222, "wizardGrey");
  expect(gandalf.id).toBe(9);
});

it("collects engineer email", () => {
  const gandalf = new Engineer("Gandalf", 9, "Gandalf@email", 2222, "wizardGrey");
  expect(gandalf.email).toBe("Gandalf@email");
});

it("states worker's role", () => {
  const gandalf = new Engineer("Gandalf", 9, "Gandalf@email", 2222, "wizardGrey");
  expect(gandalf.role).toBe("Engineer");
});

it("collects engineer role", () => {
  const gandalf = new Engineer("Gandalf", 9, "Gandalf@email", 2222, "wizardGrey");
  expect(gandalf.role).toBe("Engineer");
});

// it("allows multiple engineer to be added", () => {
//   expect(Engineer[i].length).toBe(Engineer[i].length >= [1]);
// });

});