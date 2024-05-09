//Arthimatic
//Assignment
//logical
//Comparison
//bitwise


//Arthimatic
let x=6;
let y=2;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//increment ++
console.log(++x);
console.log(x++)
console.log(x)

//decrement --


//--------------------------------

//Assignment

x=x+1;
x += 2

console.log(x);



// Comparison Operators

console.log(x>1);

console.log(x === 11);
console.log(x !== 9);


//Equality operator

//scrit equality operator (type + value)

console.log(1===1);

console.log('1'===1);

console.log('1'==1);


//Ternanry Operator

let points=100;

let typeAbc=points>110? 'green':'Red'

console.log(typeAbc);


//logical operators

//logical AND &&

console.log(true && true);

let lowIncome=false;
let goodCreditHistory=false;

let eligibleForLoan=lowIncome|| goodCreditHistory;

console.log("eligibleForLoan "+ eligibleForLoan);


//Not operator
let applicationRefused=!eligibleForLoan;
console.log('applicationRefused '+ applicationRefused);


//Logical Operator with Non Boolena
//Falsy (False)
//undefined
//null
//0
//false
//''
//NaN

// Anything that is NOT falsy --> Truthy


//Bitwise Operator

//1 = 00000001
//2 = 00000010

console.log('Testing Bitwise');
console.log('Bitwise OR '  +  (1 |2));
console.log('Bitwise And ' , 1 & 2);




//Testing
let a='red';
let b='blue';

let c=a;
console.log('c ' + c);
a=b;
console.log('a '+a);
b=c;
console.log('b '+ b);


console.log(a);
console.log(b);
