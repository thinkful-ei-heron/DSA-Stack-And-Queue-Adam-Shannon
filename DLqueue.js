const Stack = require('./stack')

//number 7:::
class _Node {
    constructor(data, prev, next) {
        this.data = data
        this.prev = prev
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        if (this.first === null) {
            const node = new _Node(data, null)
            this.first = node
            this.last = node
        }
        else if (this.last) {
            const node2 = new _Node(data, this.last)
            this.last.next = node2
            this.last = node2
        }
    }

    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        this.first.prev = null
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

// main() 

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

// changed for queue stack problem
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


//number 8:::

class QueueFromStacks {
    constructor() {
        this.first = new Stack
        this.last = new Stack
    }

    enqueue(data) {
        while (this.first.top !== null) {
            this.last.push(this.first.pop())
        }
        this.first.push(data)
        while (this.last.top !== null) {
            this.first.push(this.last.pop())
        }
    }

    dequeue() {
        return this.first.pop()
    }
}


function main2() {
    let queueStack = new QueueFromStacks
    queueStack.enqueue('1')
    queueStack.enqueue('2')
    queueStack.enqueue('3')
    console.log(display(queueStack))
    queueStack.dequeue()
    queueStack.dequeue()
    console.log(display(queueStack))
}

// main2()

//number 9:::

function dancePairs(arr) {
    const pairsQueue = new Queue
    let ready = ''
    let message = ''
    for (let i = 0; i < arr.length; i++) {
        if (ready === '') {
            console.log(display(pairsQueue))
            ready = arr[i]
        }
        if (pairsQueue === null) {
            console.log(display(pairsQueue))
            if ((ready.startsWith('F') && arr[i].startsWith('M')) || ready.startsWith('M') && arr[i].startsWith('F')) {
                message = `First dancer is ${ready}, and paired dancer is ${arr[i]}`
                ready = ''
                console.log(message)
            }
            else {
                pairsQueue.enqueue(ready)
                pairsQueue.enqueue(arr[i])
            }
        }
        else {
            console.log(display(pairsQueue))
            if ((ready.startsWith('F') && pairsQueue.first.data.startsWith('M')) || ready.startsWith('M') && pairsQueue.first.data.startsWith('F')) {
                message = `First dance is ${pairsQueue.dequeue}, and paired dancer is ${ready}`
                ready = ''
                console.log(message)
            }
            else {
                pairsQueue.enqueue(ready)
            }
        }
    }
}


dancePairs(['F Jane', 'M Frank', 'M John', 'M Sherlock', 'F Madonna', 'M David', 'M Christopher', 'F Beyonce']) 