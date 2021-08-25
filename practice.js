/*
1. let const  (done)
2. template string  (done)
2.a: use variable
2.b: use object  property
3. arrow function
3.a. with one parameter. will return the number after dividing by 5
3.b. with two parameters. will add two to each number and then multiply the result.
3.c. three parameters. will multiply all three parameters
3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result
4. [home work]: javascript function declaration vs arrow function
5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
6. [challenging] numbers of array. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
*/
const object = { name: 'fahim', idNo: 31, }
const { idNo } = object;

// 1. let const
let name = 'sifat';
const id = 31;
// 2. template string
const myName = `fahimul islam ${name} and my id is ${idNo}`
console.log(myName);
// 3.a. with one parameter. will return the number after dividing by 5
const num = num => num / 5;
console.log(num(10));
// 3.b. with two parameters. will add two to each number and then multiply the result.
const num1 = (a, b) => (a + 2) * (b + 2);
console.log(num1(3, 4));
// 3.c. three parameters. will multiply all three parameters
const num2 = (a, b, c) => a * b * c;
console.log(num2(3, 3, 3))
// 3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
// make sure you return the result



// 4. [home work]: javascript function declaration vs arrow function
// js function
function number(hello) {
    const sum = hello + 2;
    return sum;
}
// arrow function
const number1 = x => x + 2;
console.log(number1(5));
// 5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
const myNumber = [21, 15, 48, 65, 38, 15];
const result = myNumber.map(x => x * 5);
console.log(result);

// 6. [challenging] numbers of array. get odd numbers by using filter with arrow function
const odd = myNumber.filter(x => x % 2);
console.log(odd)
// 7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const expensive = products.find(product => product.price == 5000);
console.log(expensive)
// 8. You have an object. Now use destructing to create a simple variable of any property of the object.
const newObject = {
    other: { name5: 'hello', id: 45, price: 2000 }
};

const { name5, price } = newObject.other;
console.log(name5, price)
// 9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
const lastArray = [21, 45, 65, 32, 85, 15];
const [a, b, third] = lastArray;
console.log(third);

// 10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
// this function will take three parameters and will return the sum of all the three parameters.
const last = (a, b, c = 7) => sum = a + b + c;
console.log(last(3, 5))

// done