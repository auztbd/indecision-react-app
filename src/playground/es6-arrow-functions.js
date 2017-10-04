const square = function (x) {
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(square(6));
console.log(squareArrow(8));

// arguments object is NOT bound with arrow functions
const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(1, 2, 1001)) // OK

const sum = (a, b) => {
    // console.log(arguments); // ReferenceError
    return a + b;
}
console.log(sum(5, 6, 1001));


// this keyword is NOT bound with arrow functions
const user = {
    name: "Ashraf",
    cities: ["Vercelli", "Turin", "Trento", "Rome", "Pisa"],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        // function -> fails
        // this.cities.forEach(function (city) {
        //     console.log(this.name + ' has lived in ' + city);
        // })

        // arrow -> perfectly OK
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
}
user.printPlacesLived();