
/* var myArray = [];
for (var i = 0; i < 5; i++) {
    myArray.push(i);
}
console.log(myArray);
 */

 var contacts = [
     {
         "id": 1,
         "firstname": "Mit",
         "lastname": "Patel",
         "likes": ["Pizza", "puff", "Coding"]
     },
     {
        "id": 2,
        "firstname": "Harsh",
        "lastname": "Patel",
        "likes": ["puff", "Coding", "Gaming"]
    },
    {
        "id": 3,
        "firstname": "Neel",
        "lastname": "Shah",
        "likes": ["Coding", "Reading", "Music"]
    }
 ];

 function lookUpProfile(id, prop) {
     for (var i =0; i < contacts.length; i++) {
         if (contacts[i].id == id) {
            return contacts[i][prop] || "No such property";
         }
     }

    return "No such contact!";
 }

 var data = lookUpProfile(1,"likes");

 console.log(data);

 console.log("\nArrow function example:");
 //Arrow fumction (Use for anonymous function)
var magic = () => {      //Similar to 'var magic = function() {}'
  return new Date();  
};

//or other way to write
var magic1 = () => new Date();
console.log(magic1);

var myContact = function(arr1, arr2) {
    return arr1.concat(arr2);
};

//or you can write in this way: var myContact = (arr1, arr2) => arr1.concat(arr2); 

console.log(myContact([1,2], [2,5,6]));

//Only interger number

const realNumber = [0.1, 3, 5, -3, 44, 5, -0.5, 6];

const squareList = (arr) => {
  const squareInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);   //nested arrow function
  return squareInt;  
};

console.log(squareList(realNumber));

//REST Operator Example
console.log("\nREST operator:");
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3, 32)); 

//Spread operator
const arr1 = ["Jan", "Feb", "March"];
let arr2;
(function() {
    arr2 = arr1;   //It not copy arr1 to arr2 but it makes both array equals. so if I change in arr1 it reflect to arr2
    arr3 = [...arr1];   //This will copy arr1 to arr3
    arr1[0] = "Potato";
})();

console.log("\nSpread operator:");
console.log(arr1);
console.log(arr2);
console.log(arr3);


//Destricting Assignment
console.log("\nDestricting Assignment");
const stats = {
    max: 55.33,
    min: -3.33,
    mode: 323,
    average: 54,
    median: 33
};
const half = (function() {

    return function half({min, max}) {
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats))

//Template literals
console.log("\nTemplate literals");

const person = {
    name: "Mit Patel",
    age: 22
};

const greeting = `Hello, my name is ${person.name} and age is ${person.age}`;
console.log(greeting);

const result = {
    success: ["max", "min", "zero"],
    failure: ["one", "two", "three"],
    skipped: [1, 3, 5]
};
function makeList(arr) {
    const resultDisplay = [];
    for (var i = 0; i<arr.length; i++) {
        resultDisplay.push(`<li class="text-warning">${arr[i]}`)
    }

    return resultDisplay;
}

console.log(makeList(result.failure));

//Import and require
//import { capitalizeString } from "./string_function"
//const cap = capitalizeString("hello!");
//console.log(cap);