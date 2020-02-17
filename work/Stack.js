class Stack {
    constructor() {
        this.stack = []
    }

    // Inserts the element into the top of the stack
    push(element) {
        this.stack.push(element)
    }

    // Removes the element from the top of the stack and return that element
    pop() {
        if (this.isEmpty()) return 'Stack is empty!'
        return this.stack.pop()
    }

    // Return which element is on top of the stack
    peek() {
        if (this.isEmpty()) return 'Stack is empty'
        return this.stack[this.stack.length - 1]
    }

    // helper method
    isEmpty() {
        return !this.stack.length
    }
}