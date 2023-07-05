/*
Homework
In the previous exercise, we wrote a queue from scratch. For your homework, try implementing a stack from scratch. 
Whereas a queue follows FIFO, a stack follows Last In, First Out (LIFO). push, pop, check.
const stack = new Stack() 
stack.push(“Milk”) 
stack.push(“Eggs”) 
stack.check() // [“Milk”, “Eggs”] 
stack.pop()
stack.check() // [“Milk”]
stack.pop()
stack.check() // []
stack.pop() // “Stack is currently empty.”
*/

class Stack {
  // Construct basic stack structure; an empty array
  constructor() {
    this.stack = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove the top element from the stack
  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
    } else {
      console.log("Stack is currently empty.");
    }
  }

  // Return the elements in the stack
  check() {
    return this.stack;
  }
}

const stack = new Stack();
stack.push("Milk");
stack.push("Eggs");
console.log(stack.check()); // ["Milk", "Eggs"]

stack.pop();
console.log(stack.check()); // ["Milk"]

stack.pop();
console.log(stack.check()); // []

stack.pop(); // "Stack is currently empty."