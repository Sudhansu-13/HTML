// Primary DataType Day 2:

// 6. String Type:
// Anything enclosed by single quote ' ', double quote " ", and back tick ` ` 

let block = "laliguras";
let sentence = `
Nepal is prone to natural disaster.
Recently, high himalayas of Nepal was hit by flood in september.
`
console.log("String Type");
console.log(block);
console.log(sentence);
console.log(typeof sentence); // check data type a variable

// Symbol()
// immutable type, used in key of an object.
let key= Symbol('13');
console.log("Symbol Type");
console.log(key, typeof key);