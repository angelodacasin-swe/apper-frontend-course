/*
Problem 2: Queue from Scratch
A queue is a type of data structure that follows First In, First Out (FIFO). 
Implement a queue that only takes in string values using a class-based approach.
// pseudocode
const my_queue = new Queue()
my_queue.enqueue('Milk')
my_queue.enqueue('Eggs')
my_queue.check()
my_queue.dequeue()
my_queue.check()
my_queue.dequeue()
my_queue.check()
my_queue.dequeue()
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

// Update commit message 