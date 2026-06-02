var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while(pointerA !== pointerB) {
        if(pointerA === null) pointerA = headB;
        else pointerA = pointerA.next;
        if(pointerB === null) pointerB = headA;
        else pointerB = pointerB.next;
    }
    return pointerA;
};