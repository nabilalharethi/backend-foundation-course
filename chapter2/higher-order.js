//higer-order.js

//Functions that take other functions as arguments
function calculator(operation,a,b){
    return operation(a,b);
}

const add = (a,b)=> a+b;
const multiply = (a,b) => a*b;

console.log(calculator(add,5,3));
console.log(calculator(multiply,4,6));

//Function that return other functions
function creteMultiplier(multiplier) {
    return function(number){
        return number * multiplier;
    };
}

const douple = creteMultiplier(2);
const triple = creteMultiplier(3);

console.log(douple(5));
console.log(triple(4));

//aray methods (higher - order functions)
const numbers = [1,2,3,4,5,6,7,8,9,10];

//map - transforms each element
const doupled = numbers.map(num => num *2);
console.log('Doubled:', doupled);

//filter - selects elemnts that match condition
const evens = numbers.filter(num => num % 2 == 0);
console.log('Even numbers:', evens);

//reduce - combines all elements into one value
const sum = numbers.reduce((acc,num) => acc + num,0);
console.log('sum', sum);

//find - finds first element that matches condition
const firstGreaterThan5 = numbers.find(num => num > 5);
console.log('First greater than 5:', firstGreaterThan5);