// var findTheDifference = function(s, t) {
//     const sSet = {};
//     for(let i = 0; i < s.length; i++) {
//         if(sSet[s[i]]) sSet[s[i]]++;
//         else sSet[s[i]] = 1;
//     }
//     for(let i = 0; i < t.length; i++) {
//         if(sSet[t[i]]) {
//             if(sSet[t[i]] === 1) delete sSet[t[i]];
//             else sSet[t[i]]--;
//         }else {
//             return t[i];
//         }
//     }
// };