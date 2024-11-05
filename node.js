export class Node {
  constructor(key, value, next) {
    this.key = key || null;
    this.value = value || null;
    this.next = next || null;
  }
}
