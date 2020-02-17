class Node {
    constructor(next, value) {
        this.next = next
        this.value = value
    }
}

class Queue {
    constructor() {
        this.queue = null
    }

    enqueue(element) {
        let head = this.queue
        let newNode = new Node(null, element)

        if (!head) {
            this.queue = newNode
        } else {
            let traverseNode = head
            while (traverseNode.next) {
                traverseNode = traverseNode.next
            }
            traverseNode.next = newNode
        }
    }

    dequeue() {
        let head = this.queue

        if (!head) return 'Queue is empty!'

        this.queue = head.next
        return head.value
    }

    peek() {
        if(!this.queue) return 'Queue is empty!'
        return this.queue.value
    }
}