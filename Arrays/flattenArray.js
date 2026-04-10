/* the task is to flatten a deeply rooted array without using the Javascript method 
// this is the example provided ----- [[1], [1], [1,[1,[1,2],3],1], [1], [1,[2],3], [1], [1,[2,[3,4],5],6],7] - flatten arrays
                                                                                   //^
// [1,1,1,1,1,2,3,1,1,1,2,3]
[]
[[1,1], [1]]
[1,1], [] ->[1,1]
1, [] -> [1] - 1, [] -> [1,1]


if the el is not an array 

// we need an initial iteration that iterates to the end of the base array
// we need a helper function that would allow for the element to be explored in it's entirety
// we also need an additonal array in which we would house all of the elements that we have found so far
// return the results array

//helper function
*/



function flatten(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) { // avoids the issue of if we ever deal with strings 
            const flattened = flatten(arr[i]); // stores the results of the recursive call into an array
            results.push(...flattened); // pushed the raw values of the array into results
        } else {
            results.push(arr[i]);
        }
    }
    return results;
}

// console.log(flatten([[1], [1], [1, [1, [1, 2], 3], 1], [1], [1, [2], 3], [1], [1, [2, [3, 4], 5], 6], 7]));
// console.log(flatten([[], [], [[[], [], [[], [], ]]]]))