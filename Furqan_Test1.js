// FURQAN: Calculate the sum of odd numbers greater than 10 and less than 30

// const numbers = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
// let acum = 0;

// let total = numbers.reduce(add, 0);

// function add(acum, curr){
//   acum = acum + curr;
//   return acum;
// }

// console.log(total)


// FURQAN: Implement a function to remove duplicates from an array.

const numbers = [1, 1, 1, 3, 1, 5, 1, 7, 1, 9, 2, 1, 2, 3, 2, 5, 2, 7, 2, 9];
let acum = 0;
let i = 0;
let j =0;
let final = [];

let total = numbers.reduce(dup, 0);

function dup(acum, curr){
  if (acum == curr) {
    numbers.splice(curr, 1)
  }
  return numbers;
}

console.log(numbers);