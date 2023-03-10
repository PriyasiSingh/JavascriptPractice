function sum(a, b) {
    return a + b;
}

console.log(sum(12, 5));

function prod(a, b) {
    const c = a * b;
    return c;
}
console.log(prod(12, 12));

const newProd = prod(12345, 7896);
console.log(newProd);

//to calculate farenheit to celsius
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(102));
console.log(toCelsius);
console.log("The temperature is " + toCelsius(77) + " Celsius");