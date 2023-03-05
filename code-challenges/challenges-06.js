'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr) => {
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        if (max < arr[index])
            max = arr[index];
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr) => {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (typeof (arr[index]) === 'number')
            sum = sum + arr[index];
    }
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']
function swap(arr, index) {
    let temporary = arr[arr.length - 1 - index];
    arr[arr.length - 1 - index] = arr[index];
    arr[index] = temporary;
}
const reverseArray = (arr) => {
    for (let index = 0; index < arr.length / 2; index++) {
        swap(arr, index);
    }
    return arr;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums, reverseArray };