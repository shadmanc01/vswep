// var reverseList = function(head) {
//     let prev = null;
//     while(head) {
//         const temp = head.next;
//         head.next = prev;
//         prev = head;
//         head = temp;
//     }
//     return prev;
// };

// (1) -> (2) -> (3) -> (4) -> (5) 
// we need to keep the next value, in this case 2.
// we need to reassign head.next to null since the start will now be the end
// we need to store the cur node into prev
// then reassign head to the next value which we have stored in the temp
// (1) <- (2) <- (3) <- (4) <- (5)

// merge 2 sorted linked lists

// var mergeTwoLists = function(list1, list2) {
//     let dummyNode = new ListNode(-1);
//     let temp = dummyNode;

//     let curr1 = list1, curr2 = list2;

//     while (curr1 !== null && curr2 !== null) {
//         if (curr1.val < curr2.val) {
//             temp.next = curr1;
//             curr1 = curr1.next;
//         } else {
//             temp.next = curr2;
//             curr2 = curr2.next;
//         }
//         temp = temp.next;
//     }

//     // Attach the remaining nodes
//     temp.next = curr1 !== null ? curr1 : curr2;

//     return dummyNode.next;
// }