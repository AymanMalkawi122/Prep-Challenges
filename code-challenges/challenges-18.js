'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    const words = str.split(' ');
    str = words[Math.floor((words.length) / 2)];
    return str.length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    const map = new Map();

    for (let index = 0; index < Math.max(str1.length); index++) {
        map.set(str1[index], (map.get(str1[index]) == undefined) ? 1 : parseInt(map.get(str1[index])) + 1);
    }

    for (let index = 0; index < Math.max(str2.length); index++) {
        map.set(str2[index], (map.get(str2[index]) == undefined) ? -1 : parseInt(map.get(str2[index])) - 1);
    }
    let fail = false;
    map.forEach((value, key) => {

        if (value != 0) {
            fail = true;
        }
    })
    if (fail == true)
        return false;
    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (array, int) => {

   
    if (int < array[0]) {
        return -1;
    }
    let smallerNumber;
    for (let index = 0; index < array.length; index++) {

        if (int < array[index]) {
            return index ;
        }

        if (int == array[index]) {
            return index;
        }
    }
    return array.length;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };