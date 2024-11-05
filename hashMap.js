import { LinkedList } from "./linkedList.js";
export class HashMap {
  constructor() {
    this.buckets = [];
    for (let i = 0; i < 16; i++) {
      this.buckets.push(new LinkedList());
    }
  }
  set(key, val) {
    let index = this.hash(key) % 16;
    let bucket = this.buckets[index];
    if (bucket.contain(key)) {
      let bucketIndex = bucket.find(key);
      bucket.replaceAt(bucketIndex, key, val);
      return;
    }
    bucket.append(key, val);
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
}
