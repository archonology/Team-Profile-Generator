const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });


describe("Employee class", () => {
    it("collects employeee name", () => {
      const name = "Frodo";
      const e = new Employee(name, 22, "@email");
      expect(e.name).toBe("Frodo");
    });

  it("collects employee id", () => {
    const id = "001"
    const e = new Employee("Frodo", id, "@email");
    expect(e.id).toBe(id);
  });

  it("collects employee email", () => {
    const email = "@email"
    const e = new Employee("Frodo", 22, email);
    expect(e.email).toBe(email);
  });
//testing the functions
  // test("should be able to get name from method", ()=>{
  //   const name = "Cleo"
  //   const e = new Employee(name, 0, "email@email.com")
  //   expect(e.getName()).toBe(name);
  // })

  // test("should be able to get id from method", ()=>{
  //   const id = "22"
  //   const e = new Employee("Cleo", id, "email@email.com")
  //   expect(e.getId()).toBe(id);
  // })
})

})
