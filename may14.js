// arrays do not support filter methods
// arr.myFilter()
// 

Array.prototype.myFilter = function(x) {
// use 'this' to access the array
    if(!x) throw new Error('This function expects at least one argument');
    const results = [];
    for(let i = 0; i < this.length; i++) {
        if(x(this[i])) results.push(this[i]);
    }
    return results;    
}

const nums1 = [1,2,3,4,5,6,7,8,9,10];

console.log(nums1.myFilter(x => x % 2 === 0));

Array.prototype.myMap = function(x) {
    if(!x) throw new Error('This function expects at least one argument');
    const results = [];
    for(let i = 0; i < this.length; i++) {
        results.push(x(this[i]));
    }
    return results;
}

Array.prototype.myMap = function(x) {
    if(!x) throw new Error('This function expects at least one argument');
    const results = [];
    for(let i = 0; i < this.length; i++) {
        results.push(x(this[i]));
    }
    return results;
}
console.log(nums1.myMap(x => x * 2));

//figure out the difference between regular functions and arrow functions
// Homework: create myMap, myReduce, myFlatMap, mySort(use any sorting algorithm), any other functions
// read book to grasp basics of JS, Mozilla, you don't know JS