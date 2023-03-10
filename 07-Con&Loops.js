//switch case first example
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log("Today day is : " + day);

//Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
fruits = "apple";

switch (fruits) {
    case "banana":
        alert("Hello");
        break;
    case "apple":
        alert("Welcome");
        break;
}



//Create a logic to double the number present in an array & print it

const doubleArray = [1, 2, 3, 4];

for (let i = 0; i < doubleArray.length; i++) {
    console.log(doubleArray[i] * 2);
}

//For in Loop example
const cars = {
    name: "Audi",
    model: "500"
};

let textCar = "";

for (let x in cars) {
    textCar += cars[x] + "<br>";
}

console.log(textCar);

//Create a loop that runs from 0 to 9.

for (i = 0; i <= 9; i++) {
    console.log(i);
}

//Create a loop that runs through each item in the fruits array.
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
    console.log(x);
}



// //example for while loop
// let password = "tomorrow";
// let userGuess = "";

// while (userGuess != password) {
//     userGuess = prompt("please eneter the correct password");
// }

// alert("Login successful");