class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }

}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    isEmpty() {
        return this.length === 0
    }

    push(value) {
        // create a new node
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail.next.previous = this.tail
            this.tail = newNode
        }
        this.length++
    }

    pop() {
        // 1. check for no values
        if (this.isEmpty()) {
            return null
        }
        // 2. check for single node
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.previous
            this.tail.next = null
        }
        this.length--
    }

    //insert(index, value)

    get(index) {
        // check if out of bounds
        if (index < 0 || this.length < index || this.isEmpty()) {
            return "Invalid Index"
        }
        // for first index
        if (index === 0) {
            return this.head
        }

        if (index === this.length - 1) {
            return this.tail
        }

        let currentNode = this.head
        let counter = 0
        while (counter < index) {
            if (counter !== index) {
                counter++
                currentNode = currentNode.next
            }
            return currentNode
        }
    }


    delete(index) {
        if (index < 0 || this.length < index || this.isEmpty()) {
            return "Invalid Index"
        }
        // for first index
        else if (index === 0) {
            let newHead = this.head.next
            this.head = newHead
            this.length--
        }

        else if (index === this.length - 1) {
            let currentNode = this.head
            while (currentNode) {
                if (currentNode.next === this.tail) {
                    this.tail = currentNode
                    this.length--
                    break
                }
                currentNode = currentNode.next
            }
        }
        else {
            let pos = 0
            let currentNode = this.head
            let prevNode
            while (pos < index) {
                pos++
                prevNode = currentNode
                currentNode = currentNode.next
            }
            prevNode.next = currentNode.next
            currentNode.next.previous = prevNode
            this.length--
        }
    }

    prettyPrint() {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode === this.tail) {
                process.stdout.write(`${currentNode.value}\n`)
                break
            }
            process.stdout.write(currentNode.value + " -> ")
            currentNode = currentNode.next

        }
    }

}