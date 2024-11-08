import { LinkedList } from "./linkedList.js";
export class HashMap {
  #loadFactor = 0.8;
  #entriesCount = 0;
  #capacity = 16;
  constructor() {
    this.buckets = [];
    this.#populateBuckets(this.#capacity, this.buckets);
  }
  #populateBuckets(index, arr) {
    for (let i = 0; i < index; i++) {
      arr.push(new LinkedList());
    }
  }
  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  #growthBuckets(size) {
    let tmpArr = [];
    this.#populateBuckets(size, tmpArr);
    this.buckets.forEach((list) => {
      if (list.size() != 0) {
        let tmp = list.head;
        while (tmp !== null) {
          let index = this.#hash(tmp.key) % this.#capacity;
          tmpArr[index].append(tmp.key, tmp.value);
          tmp = tmp.next;
        }
      }
    });
    this.buckets = tmpArr;
  }
  set(key, val) {
    if (this.#capacity * this.#loadFactor < this.#entriesCount) {
      this.#capacity = this.#capacity * 2;
      this.#growthBuckets(this.#capacity);
    }
    let index = this.#hash(key) % this.#capacity;
    let bucket = this.buckets[index];
    if (bucket.contain(key)) {
      let bucketIndex = bucket.find(key);
      bucket.replaceAt(bucketIndex, key, val);
      return;
    }
    bucket.append(key, val);
    this.#entriesCount++;
  }
  get(key) {
    let index = this.#hash(key) % this.#capacity;
    let tmp = this.buckets[index].head;
    if (tmp !== null) {
      while (key !== tmp.key && tmp.next != null) tmp = tmp.next;
      if (key == tmp.key) return tmp.value;
    } else return null;
  }
}
