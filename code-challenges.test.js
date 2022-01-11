// ASSESSMENT 3: Coding Practical Questions with Jest

//

// const { expect, describe } = require("@jest/globals")

// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("a function called fibFun will", () => {
    it("takes in a number and returns an array containing the numbers of the fib. sequence", () => {
        expect(fibFun(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibFun(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
// b) Create the function that makes the test pass.

// create a function that takes in a number as it's param
//the function will return an array
//I need to declare an array for the returned numbers to be stored
// the array will contain the first two numbers of the sequence starting at 1 instead of zero
// the numbers returned should follow the Fibonacci sequence
// I will then create a for loop to iterate over the array
// as each index is iterated over, it will add the two previous indexes together 
// the result will be pushed into the array
// the array will be returned

const fibFun = (number) => {
var fibArr = [1,1]
for(let i = 2; i < number; i++)
    fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    return fibArr;
}






// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("a funciton called oddSort", () => {
    it("takes in an array and returns an array with only odd numbers ordered least to greatest", () => {
        expect(oddSort(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddSort(fullArr2)).toEqual([-823, 7, 23])
    })
})

// b) Create the function that makes the test pass.
//create a funciton that takes in an array of mixed elements
//I need to iterate over the array
//I need to filter out the odd numbers (+ & -)
//add odd numbers to a new array
//return the new array

const oddSort = (array) => {
    let oddArr = []
     oddArr = array.filter(value => {
        if (value % 2 !== 0 && typeof value !== "string" && typeof value !== "boolean")
        return oddArr.push(value)
    })
        return oddArr.sort((a,b) => a-b);
}







// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("a funciton called accSum", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
        expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
        expect(accSum(numbersToAdd3)).toEqual([]);
    })


})   
// b) Create the function that makes the test pass.
//create a function that takes in an array
//create an empty array to store the new values in
//iterate over the array provided
//add the first value to itself
//add the sum of the first value and itself to the next value and so on
//return the accumulating sum into the new array

const accSum = (array) => {
    let accArr = array.map((sum => value => sum += value)(0));
    return accArr
    }
    