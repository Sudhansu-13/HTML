//Non primary type

// Object
//Array
//Function

//object : key-value pair enclosed by curly bracket {}.

student= {
    name: "Sudhansu Sunar",
    age:21,
    address:"KTM"
};
console.log("Oject Type:")
console.log(student, typeof student);

//array
//array is a dyanamic collection of data enclosed by big bracket [].
// In javascript we can store heterogenous type of data in an array.

console.log("\n\nArray");
fruit= ["Orange", "Kiwi", "Avacado","Dragon Fruit"];
console.log(fruit, typeof fruit);

//Function
let dog = function() {
    return "Bark Bark";
};
console.log(dog(), typeof dog);