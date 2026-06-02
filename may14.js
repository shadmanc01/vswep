// arrays do not support filter methods
// arr.myFilter()
// 

Array.prototype.myFilter = function (x) {
    // use 'this' to access the array
    if (!x) throw new Error('This function expects at least one argument');
    const results = [];
    for (let i = 0; i < this.length; i++) {
        if (x(this[i])) results.push(this[i]);
    }
    return results;
}

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums1.myFilter(x => x % 2 === 0));

Array.prototype.myMap = function (x) {
    if (!x) throw new Error('This function expects at least one argument');
    const results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(x(this[i]));
    }
    return results;
}

Array.prototype.myReduce = function (callback, initialValue) {
    // if(!x) throw new Error('This function expects at least one argument');
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be a function");
    }
    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        if (this.length === 0) {
            throw new TypeError("no initial value");
        }
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

Array.prototype.myFlatMap = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be a function");
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        const mappedValue = callback(this[i], i, this);

        if (Array.isArray(mappedValue)) {
            for (let j = 0; j < mappedValue.length; j++) {
                result.push(mappedValue[j]);
            }
        } else {
            result.push(mappedValue);
        }
    }

    return result;
};

// Array.prototype.mySort = function (callback) {
//     if (typeof callback !== "function") {
//         throw new TypeError("Callback must be a function");
//     }
//     const results = this;

//     const defCompare = (a, b) => {
//         const strA = String(a);
//         const strB = String(b);

//     }
// }
// console.log(nums1.myMap(x => x * 2));
// console.log(nums1.myReduce());
//figure out the difference between regular functions and arrow functions
// Homework: create myMap, myReduce, myFlatMap, mySort(use any sorting algorithm), any other functions
// read book to grasp basics of JS, Mozilla, you don't know JS

// read up on segment trees and tries
// need to understand the basics of the tech stack
// how command lines and data bases work and also systems design
// build an application for 5-100 people
// deploy using aws
// variable declarations are moved up, if js is interprated, it doesn't scan the code before

