import { HashMap } from "./hashMap.js";
let test = new HashMap();
test.set("greeting", "hi");
test.set("subject", "helloSub");
test.set("1", "hello1");
test.set("2", "hello2");
test.set("3", "hello3");
test.set("4", "hello4");
test.set("5", "hello5");
test.set("6", "hello6");
test.set("7", "hello7");
test.set("8", "hello8");
test.set("9", "hello9");
test.set("10", "hello10");
test.set("11", "hello11");
test.set("12", "hello12");
console.log(test.buckets[1]);
console.log(test.remove("12"));
console.log(test.remove("as"));
console.log(test.buckets[1]);
