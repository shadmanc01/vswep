// A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order.

// It follows the principle of "First in, First out" (FIFO), where the first element added to the queue is the first one to be removed.
// It is used as a buffer in computer systems where we have speed mismatch between two devices that communicate with each other. For example, CPU and keyboard and two devices in a network
// Queue is also used in Operating System algorithms like CPU Scheduling and Memory Management, and many standard algorithms like Breadth First Search of Graph, Level Order Traversal of a Tree.

class myStack {
    constructor() {
        this.q = [];
    }

    // push element on top
    push(x) {
        this.q.push(x);

        let sz = this.q.length;
        for (let i = 0; i < sz - 1; i++) {
            this.q.push(this.q[0]);
            this.q.shift();
        }
    }

    // remove top element
    pop() {
        if (this.q.length > 0)
            this.q.shift();
    }

    // return top element
    top() {
        if (this.q.length === 0)
            return -1;
        return this.q[0];
    }

    // return current size
    size() {
        return this.q.length;
    }
}

