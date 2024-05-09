console.log('Testing');
let name='madhu'
console.log(name);


let firstName='dharani';
console.log(firstName);


// constant variable

const interestRate="0.3"
console.log(interestRate);


//primitive types

let nameOfThePerson='madhu';
let age=30;
let isValid='true';
let cityName=undefined;
let CityDesc=null;


//@@@@@@@@@@@@@@@@@@@@@Reference Type

//objects

let person={
    firstName:'madhu',
    age:40

};

//dot notation
person.firstName='dharani';
console.log(person.firstName);

//bracket notation , used in dynamic 
person['firstName']='nothing';
console.log(person['firstName']);


console.log(person);



// Array 

let selectedColors=['red','green']
selectedColors[2]='Blue'
console.log(selectedColors);


//Function

function greet(name)
{
    console.log('Hello ' + name)
}

greet('Manvitha');
