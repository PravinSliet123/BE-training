// varibles

// var
// let
// const

function myFunction() {
  console.log(name);
  if (true) {
    let name = "dfsfdsfsd";
    const userName = "John";
    console.log(userName);
  }
}
myFunction();

// string == "Sarv InfoTech"
// number == 1,2.5
// boolean == true/false
// Null  == null
//Undefined == undefined
// Array == ["string,"{},{}]
// Object == {name:"Sarv InfoTech", age: 1, isActive: true, address: {city: "Delhi", state: "Delhi"}}

// Operators

// Conditional Operators
// ==,=== (type checking and value), <, >,<==,>==
// ...
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let combineArry = [...array1, ...array1];
console.log(combineArry);

// Functions

function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Sarv InfoTech");

// Arrow functions

const sayHelloArrow = (name, age) => {
  if (age >= 18) {
    console.log("Hey " + name + " You are eligible to vote");
  } else {
    console.log("Hey " + name + " You are not eligible to vote");
  }
};

sayHelloArrow("Sarv InfoTech with Pravin", 12);

// for

// for (let index = 0; index < 5; index++) {
//   // console.log("Number=>", index);
// }

// let n = 5;

// while (n >= 0) {
//   // console.log("Number=>", n);
//   n--;
// }

// let i = 0;
// do {
//   console.log("do While", i);
//   i++;
// }while (i < 0);

// For ... in

// const myObject = { key: "anil" };
// console.log("myObject: ", myObject);
// const userInformation = new Object();

// userInformation.name = "Sarv Infotech";
// userInformation.address = " Muzaffarpur ";
// userInformation.zipcode = "843320";
// console.log("userInformation: ", userInformation);

// for (let key in userInformation) {
//   console.log(key + ": " + userInformation[key]);
// }

const users = ["1", "2", "3", "4", "5", "6"];

const modifiedUser = users.map((val, index) => val + "0");
