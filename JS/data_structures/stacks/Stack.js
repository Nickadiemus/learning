class Stack {
    constructor() {
        this.stack = []
    }

    get_length() {
        return this.stack.length
    }

    push(item) {
        return this.stack.push(item)
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }
}

function printStack(s) {
    console.log(s)
}

//testing
stack = new Stack()
printStack(stack.isEmpty())
stack.push(1)
printStack(stack.peek())
printStack(stack.isEmpty())
stack.push(2)
printStack(stack.peek())
stack.pop()
printStack(stack.peek())
stack.pop()





