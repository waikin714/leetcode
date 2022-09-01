
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

MyQueue.prototype.transfer = function(fromStack, toStack){
  while(fromStack.length > 0)
  {
      let ele = fromStack.pop();
      toStack.push(ele);
  }
}
/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  this.stack2 = [];
  this.transfer(this.stack1, this.stack2);
  let result = this.stack2.pop();
  this.transfer(this.stack2, this.stack1);
  return result;
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  this.stack2 = [];
  this.transfer(this.stack1, this.stack2);
  let result = this.stack2[this.stack2.length - 1];
  this.transfer(this.stack2, this.stack1);
  return result;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack1.length == 0;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
let myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
