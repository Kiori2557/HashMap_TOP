import { Node } from "./node.js";
export class LinkedList {
  constructor() {
    this.head = null;
  }
  append(key, value) {
    if (this.head == null) {
      this.head = new Node(key, value);
      return;
    }
    let tmp = this.head;
    while (tmp.next != null) tmp = tmp.next;
    tmp.next = new Node(key, value);
  }
  contain(val) {
    if (this.head == null) {
      return false;
    }
    let tmp = this.head;
    while (tmp.key != val && tmp.next != null) {
      tmp = tmp.next;
    }
    if (tmp.next == null && tmp.key != val) {
      return false;
    } else {
      return true;
    }
  }
  find(val) {
    let index = 0;
    if (this.head == null) {
      return null;
    }
    let tmp = this.head;
    while (tmp.key != val && tmp.next != null) {
      tmp = tmp.next;
      index++;
    }
    if (tmp.next == null && tmp.key != val) {
      return null;
    } else {
      return index;
    }
  }
  size(tmp = this.head) {
    if (this.head == null) {
      return 0;
    }
    if (tmp.next == null) return 1;
    else if (tmp.next != null) {
      tmp = tmp.next;
      return 1 + this.size(tmp);
    }
  }
  replaceAt(index, key, value) {
    if (index < 0 || index > this.size()) {
      return;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;
    if (index == 0) {
      this.head = new Node(key, value);
    } else {
      for (let i = 1; i < index; i++) {
        // i start at 1 coz the current node start from the node after the head node
        currentNode = currentNode.next;
        previousNode = previousNode.next;
      }
      let replaceNode = new Node(key, value, currentNode.next);
      previousNode.next = replaceNode;
    }
  }
}
