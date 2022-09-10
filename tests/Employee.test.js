const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("collects employeee name", () => {
      expect(new Employee.name("Frodo")).toBe("Frodo");
    });

  it("collects employee id", () => {
    expect(new Employee.id(22)).toBe(22);
  });

  it("collects employee email", () => {
    expect(new Employee.email("@email")).toBe("@email");
  });

  it("collects employee role", () => {
    expect(new Employee.role("Manager")).toBe("Manager");
  });

//how do I check if the program is directing user to the appropriate .js files depending on choice? Remember that the roles are extended from the constructor Employee...
  it("directs user to manager.js if manager is selected as the role", () => {
    if(manager){
    expect(new manager()).toBe(true);
    }
  });

  it("directs user to engineer.js if engineer is selected as the role", () => {
    if(engineer){
    expect(new engineer()).toBe(true);
    }
  });

  it("directs user to intern.js if intern is selected as the role", () => {
    if(intern){
    expect(new intern()).toBe(true);
    }
  });


});