'use strict';
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 3);
// console.log(appleJuice)

// const orangeJuice = fruitProcessor('two', 'three');
// console.log(orangeJuice + ` Banana Juice can be added`)

//function declaration
// function calAge1(birthYear) {
//     return 2037 - birthYear
// }
// const age1 = calAge1(1991)

// //function expression
// const calAge2 = function (birthYear) {
//     return 2037 - birthYear
// }
// const age2 = calAge2(1992)

// console.log(age1, age2)

//arrow function
// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1993);
// console.log(age3)


//calculate how many years left until retirement
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement
// }
// console.log(yearsUntilRetirement(1996))


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1996, 'Morgan'))



//function calling another function
const cutPieces = function (fruit) {
    return fruit * 4;
}
const fruitProcessor = function (apples, oranges) {
    const orangePieces = cutPieces(oranges);
    const applePieces = cutPieces(apples);
    const juice = `Juice with ${applePieces} pieces of apples and 
    ${orangePieces} pieces of oranges`
    return juice;
}
console.log(fruitProcessor(2, 3))