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

console.log(rearrange([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]));

// this approach rather than rearranging the original array in place returns a new array. Need to revisit to figure out a algorithm that will meet the conditions of the problem

