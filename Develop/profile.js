class Profile {
  constructor(name, id, email, phone, position) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.position = position;
  }
  printProfile(){
    console.log(`
    name: ${this.name}
    id: ${this.id}
    email: ${this.email}
    phone: ${this.phone}
    position: ${this.position}
    `)
  }
}

const frodo = new Profile ("Frodo Baggins", 12, "ringbearer@middleware.com", 9995557447, "Intern");

frodo.printProfile();

console.log(frodo instanceof Profile);
console.log(frodo.name);


module.exports = Profile;
