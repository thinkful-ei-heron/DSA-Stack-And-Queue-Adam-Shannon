class _Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//number 6:::
class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
  
    enqueue(data) {
        const node = new _Node(data)
        if (this.first === null) {
            this.first = node
        }
        if (this.last) {
            this.last.next = node
        }
        this.last = node
    }
  
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        if (node === this.last) {
            this.last = null
        }
        return node.data
    }
  }
  
  function main() {
    const starTrekQ = new Queue
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')
    starTrekQ.dequeue()
    console.log(display(starTrekQ))
    console.log(peek(starTrekQ))
    console.log(isEmpty(starTrekQ))
  }
  
//  main()

  function peek(queue) {
    if (queue.first === null) {
      return null
    }
    return queue.first.data
  }
  
  function isEmpty(queue) {
    if (queue.first === null) {
      return true
    }
    return false
  }
  
  function display(queue) {
    let currNode = queue.first
    displayArray = []
    while (currNode !== null) {
      console.log(currNode)
      displayArray.push(currNode.data)
      currNode = currNode.next
    }
    return displayArray
  }

