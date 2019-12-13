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
    if (this.top === null) {
      return 'Stack is Empty';
    }
    let topNode = this.top;
    this.top = topNode.next;
    return topNode.data;
  }
}
//helper function

function peek(stack) {
  let top = stack.top;
  if (top === null) {
    return null;
  }
  return top.data;
}

function isEmpty(stack) {
  let top = stack.top;
  if (top === null) {
    return true;
  }
  return false;
}


function display(stack) {
  let currNode = stack.top;
  let answer = [];
  while (currNode !== null) {
    answer.unshift(currNode.data);
    currNode = currNode.next;
  }
  console.log(answer);
  return answer;
}

function main() {
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

// main();


function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // Your code goes here
  const palindromes = new Stack();
  let forward = '';
  let backward = '';
  for (let i = 0; i < s.length; i++) {
    palindromes.push(s.charAt(i));
    forward += s.charAt(i);
  }
  for (let i = 0; i < s.length; i++) {
    backward += palindromes.pop();
  }
  if (forward === backward) {
    return true;
  }
  return false;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

//number four goes here. need to rework this one.



//number 5:::

function sortStack(stack) {
  const sort = new Stack
  while (!isEmpty(stack)) {
      let tempNode = stack.pop()
      while (!isEmpty(sort) && peek(sort) < tempNode) {
          stack.push(sort.pop())
      }
      sort.push(tempNode)
  }
  return display(sort)
}

// const numbersStack = new Stack
// numbersStack.push(1)
// numbersStack.push(2)
// numbersStack.push(8)
// numbersStack.push(20)
// numbersStack.push(3)
// console.log(display(numbersStack))
// console.log(sortStack(numbersStack))

module.exports = Stack