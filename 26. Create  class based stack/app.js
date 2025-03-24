// Create a class-based stack with push, pop, peek, and isEmpty

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push(val);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10
