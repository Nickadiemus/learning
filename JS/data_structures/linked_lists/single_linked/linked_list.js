class Node {
    constructor(value) {
        this.value = value
        this.next = null
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
        if (this.lenth === 1) {
            this.head = null
            this.tail = null
            this.length--
        } else {

            let currentNode = this.head
            let previousNode
            while (currentNode) {
                // finds second to last node
                if (currentNode.next === this.tail) {
                    previousNode = currentNode
                    break
                }
                currentNode = currentNode.next
            }
            previousNode.next = null
            this.tail = previousNode
            this.length--
            return currentNode.next

        }
    }

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

ll = new LinkedList()

ll.push(1)
ll.prettyPrint()
ll.push(2)
ll.prettyPrint()
ll.push(3)
ll.prettyPrint()
ll.push(4)
ll.prettyPrint()
ll.push(5)
ll.prettyPrint()
ll.pop()
ll.prettyPrint()
ll.delete(2)
ll.prettyPrint()
console.log(ll.delete(9))
console.log(ll.delete(-19))
console.log(ll.get(-19))
console.log(ll.get(1))
console.log(ll.get(2))