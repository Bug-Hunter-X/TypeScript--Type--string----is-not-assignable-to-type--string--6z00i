function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return people.map(person => "Hello, " + person);
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); // Correct handling of array

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); //Correct usage