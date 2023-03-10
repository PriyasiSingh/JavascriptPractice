class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie() {
        console.log("iam eating " + this.name + " which is " + this.isGlutenFree);
    }

}

const myCookie = new Cookie("Choclate Chip", true);

myCookie.eatCookie();

//differentiating between class and object
const cookie = {
    name: "Vanilla Cookie",
    isGlutenFree: false,
    eatCookie: function () {
        console.log("iam eating " + this.name + " which is " + this.isGlutenFree);
    }
}

cookie.eatCookie();

//Create a Class method named "age", that returns the Car age
class Cars {
    constructor(name, model, age) {
        this.name = name;
        this.model = model;
        this.age = age;
    }

    ageM() {
        console.log(" The age of " + this.name + " car is " + this.age);
    }
}

const myCar = new Cars("Fiat", 500, 8);
myCar.ageM();

//improvising the above code
class CarsNew {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    ageOfCar() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myNewCar = new CarsNew("Fiat", 500, 2018);
console.log(" The age of " + myNewCar.name + " car is " + myNewCar.ageOfCar());