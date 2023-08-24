const greet = (name) => `Hello, ${name}! Welcome!`;

let personName = "Alvi";
let message = greet(personName);
console.log(message);

//array of numbers

const numbers = [2, 4, 6, 8, 10];

const squaredNumbers = numbers.map(number => number ** 2);

console.log(squaredNumbers);

// Destructuring 

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Developer"
};


const { firstName, lastName, age } = person;

console.log(firstName);  
console.log(lastName);   
console.log(age);        

//

function delayedResolve(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after " + delay + " tenmilliseconds");
    }, delay);
  });
}

// promise

delayedResolve(3000) 
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

 //two arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); 


//class called

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    console.log(`Hello! My name is ${this.getFullName()} and I am ${this.age} years old.`);
  }
}


const person1 = new Person("Shahan", "Alvi", 23);


console.log(person1.getFullName()); 
person1.greet(); 
