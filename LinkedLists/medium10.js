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

// cyclic linked list
// Add Two Numbers (LeetCode 2)
// var addTwoNumbers = function(l1, l2) {
//     let dummy = new ListNode(0);
//     let cur = dummy;
//     let carry = 0;

//     while (l1 || l2 || carry) {
//         const v1 = l1 ? l1.val : 0;
//         const v2 = l2 ? l2.val : 0;
//         const sum = v1 + v2 + carry;

//         carry = Math.floor(sum / 10);
//         cur.next = new ListNode(sum % 10);
//         cur = cur.next;

//         l1 = l1 ? l1.next : null;
//         l2 = l2 ? l2.next : null;
//     }

//     return dummy.next;
// };



// //Intersection of Two Linked Lists (160)

// var getIntersectionNode = function(headA, headB) {
//     if (!headA || !headB) return null;

//     let a = headA;
//     let b = headB;

//     while (a !== b) {
//         a = a ? a.next : headB;
//         b = b ? b.next : headA;
//     }

//     return a;
// };



// //Odd Even Linked List (LeetCode 328)

// var oddEvenList = function(head) {
//     if (!head) return head;

//     let odd = head;
//     let even = head.next;
//     let evenHead = even;

//     while (even && even.next) {
//         odd.next = even.next;
//         odd = odd.next;
//         even.next = odd.next;
//         even = even.next;
//     }

//     odd.next = evenHead;
//     return head;
// };



// // Rotate List (LeetCode 61)

// var rotateRight = function(head, k) {
//     if (!head || !head.next || k === 0) return head;

//     let tail = head;
//     let length = 1;

//     while (tail.next) {
//         tail = tail.next;
//         length++;
//     }

//     k = k % length;
//     if (k === 0) return head;

//     tail.next = head;

//     let steps = length - k;
//     let newTail = head;

//     for (let i = 1; i < steps; i++) {
//         newTail = newTail.next;
//     }

//     let newHead = newTail.next;
//     newTail.next = null;

//     return newHead;
// };



// // Remove Duplicates from Sorted List II 
// var deleteDuplicates = function(head) {
//     let dummy = new ListNode(0, head);
//     let cur = dummy;

//     while (cur.next && cur.next.next) {
//         if (cur.next.val === cur.next.next.val) {
//             let val = cur.next.val;
//             while (cur.next && cur.next.val === val) {
//                 cur.next = cur.next.next;
//             }
//         } else {
//             cur = cur.next;
//         }
//     }

//     return dummy.next;
// };
