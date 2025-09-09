class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.size = 0;
    this.head = new Node(0); // dummy head to simplify edge cases
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i <= index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  addAtHead(val) {
    this.addAtIndex(0, val);
  }

  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
      pred = pred.next;
    }
    let newNode = new Node(val, pred.next);
    pred.next = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
      pred = pred.next;
    }
    pred.next = pred.next.next;
    this.size--;
  }
}
