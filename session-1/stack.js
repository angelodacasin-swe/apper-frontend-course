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


class Queue {

  // Construct basic queue structure; an empty array.
  constructor() {
    this.queue = [];
  }
  
  // Add element 'n'
  enqueue(n) {
    this.queue.push(n);
  }

  // Removes/discards the first element in the array. Here, 'Milk' is removed.
  dequeue() {
    this.queue.shift();
  }

  // Check and return the corresponding code depending on the condition met.
  check() {
    if(this.queue.length > 0) 
      console.log(this.queue);
    else
      console.log("Queue is empty")
  }
}

// FIFO queue
const my_queue = new Queue();
my_queue.enqueue('Milk')
my_queue.enqueue('Eggs')
my_queue.check()
my_queue.dequeue()
my_queue.check()
my_queue.dequeue()
my_queue.check()