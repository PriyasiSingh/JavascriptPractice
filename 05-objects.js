const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

//Alert "John" by extracting information from the person object.
const personAlert = {
    firstName: "John",
    lastName: "Doe"
};

alert(personAlert.firstName);

//Add the following property and value to the person object: country: Norway
const personAdd = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway",
    fullId: function () {
        return "The full identity is " + this.firstName + " " + this.lastName + " and " + this.country;
    }
};
console.log(personAdd.fullId());

//Create an object called person with name = John, age = 50.
//Then, access the object to alert("John is 50").

const personNew = {
    firstName: "John",
    age: 50
};
alert(personNew.firstName + " is " + personNew.age);