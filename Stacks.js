// What is Stack?

// Stack is a linear data structure that follows a particular order in which
// the operations are performed. The order may be LIFO(Last In First Out) or
// FILO(First In Last Out). LIFO implies that the element that is inserted last,
//  comes out first and
// FILO implies that the element that is inserted first, comes out last.

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop(element) {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop(element);
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.stack[this.size() - 1]
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.stack.length;
    }

}

const stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())
// console.log(stack.pop()).1``,n80
// console.log(stack.pop())

// console.log(stack.peek())