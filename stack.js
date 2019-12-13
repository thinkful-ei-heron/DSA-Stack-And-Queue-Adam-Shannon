class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }
  //push method is O(1) since we are only adding to the top of the stack
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  //Since we are removing only from the top of the stack, the time complexity of 
  //removing an item from a stack is constant, O(1).
  pop() {
    if(this.top === null){
      return 'Stack is Empty';
    }
    let topNode = this.top;
    this.top = topNode.next;
    return topNode.data;
  }
}
//helper function

function peek(stack){
  let top = stack.top;
  if (top === null){
    return 'The stack is currently empty';
  }
  return top.data + ' is at the top of the stack';
}

function isEmpty(stack){
  let top = stack.top;
  if(top === null){
    return 'The stack is Empty';
  }
  return 'The stack is not Empty';
}


function display(stack){
  let currNode=stack.top;
  let answer= [];
  while(currNode !== null) {
    answer.unshift(currNode.data);
    currNode = currNode.next;
  }
  console.log(answer);
  return answer;
}

function main(){
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  display(starTrek);
  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  console.log(starTrek.pop());
  console.log(starTrek.pop());
  display(starTrek);
}

main();