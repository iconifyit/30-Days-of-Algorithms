class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element)
    }

    dequeue() {
        if (this.isEmpty()) return 'Queue is empty'
        return this.queue.shift()
    }

    peek() {
        if (this.isEmpty()) return 'Queue is empty'
        return this.queue[0]
    }

    // helper method
    isEmpty() {
        return !this.queue.length
    }
}