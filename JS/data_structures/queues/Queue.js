class Queue {
    constructor() {
        this.queue = []
    }

    // add to the queue
    enqueue(item) {
        this.queue.push(item)
    }

    // remove from the queue
    dequeue() {
        return this.queue.shift()
    }

    // checks if the queue is empty
    isEmpty() {
        return this.queue.length === 0
    }

    getLength() {
        return this.queue.length
    }

    peek() {
        return this.queue[0]
    }
}

q = new Queue()
q.enqueue("First")
q.enqueue("Second")
q.enqueue("Third")
console.log(q)
q.dequeue()
console.log(q)
q.dequeue()
console.log(q)
