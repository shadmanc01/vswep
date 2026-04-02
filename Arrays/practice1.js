// Array practice
// Rearrange array to make arr[i] = i
const rearrange = (arr) => {
    const arrSize = arr.length;
    // const numSet = new Set(Array.from({length: arrSize + 1}, (_, i) => i));
    const numSet = new Set(arr);
    const results = [];
    for(let i = 0; i < arr.length; i++) {
        if(numSet.has(i)) results.push(i);
        else results.push(-1);
    }
    return results;
}

// console.log(rearrange([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]));

// this approach rather than rearranging the original array in place returns a new array. Need to revisit to figure out a algorithm that will meet the conditions of the problem

// Maximum Circular Subarray Sum 
const maxSum = (arr) => {
    let largestSum = arr.reduce((acc, curr) => acc + curr, 0);
    let tail = 0;
    for(let i = 0; i < arr.length; i++) {
        if(largestSum - Math.abs(tail) + tail > largestSum) largestSum =  largestSum - Math.abs(tail) + tail;
        tail = arr[i];
        console.log(largestSum - Math.abs(tail) + tail)
    }
    console.log(largestSum);
    return;
}

// maxSum([8, -8, 9, -9, 10, -11, 12])

// this approach is different from the other approaches in that I am using a map to store the index and the value
// in my second iteration I am updating the spots within the array

const pairOrdering = (arr, ind) => {
    const pairs = {};
    for(let i = 0; i < arr.length; i++) {
        pairs[arr[i]] = ind[i];
    }
    for (const [key, value] of Object.entries(pairs)) {
        const keyNum = Number(key);
        arr[value] = keyNum;
    }
    console.log(arr);
    return arr;
}

// pairOrdering([10,11,12], [1,0,2]);
// pairOrdering([50, 40, 70, 60, 90], [3,  0,  4,  1,  2])

// product of array except self

// const productArray = (arr) => {
//     let product = 1;
//     for(let i = 0; i < arr.length; i++) {
//         product*= arr[i];
//     }
//     const results = [];
//     for(let i = 0; i < arr.length; i++) {
//         results.push(product/arr[i]);
//     }
//     return results;
// }

// console.log(productArray([10, 3, 5, 6, 2]));