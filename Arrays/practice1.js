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

// kth sum contiguous subarray
// need to create a pointer that moves over when we've reached the end of the array

// const contSub = (arr, k) => {
//     let n = arr.length;
//     let sums = [];
//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = i; j < n; j++) {
//             sum += arr[j];
//             sums.push(sum);
//         }
//     }
//     sums.sort((a, b) => b - a);
//     return sums[k - 1];
// }

// console.log(contSub([20,-5,-1], 3))

// count triangles 
// function countTriangles(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 if (arr[i] + arr[j] > arr[k] &&
//                     arr[i] + arr[k] > arr[j] &&
//                     arr[k] + arr[j] > arr[i]) {
//                     res++;
//                 }
//             }
//         }
//     }
//     return res;
// }

// const arr = [4, 6, 3, 7];
// console.log(countTriangles(arr));