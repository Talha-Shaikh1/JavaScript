const score = 400
const balance = new Number(100);
console.log(score, balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const num1 = 123.1224

console.log(num1.toPrecision(5));


const num2 = 11000000
console.log(num2.toLocaleString('en-IN'));



// ++++++++++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 5, 8));
console.log(Math.max(3,5,7,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)