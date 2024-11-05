import { HashMap } from "./hashMap.js";
let test = new HashMap();
test.set("greeting", "hi");
test.set("greeting", "hello");
console.log(test.buckets[9]);
