
// adding elements
const numbers=[2,3];

//adding number at end
console.log('adding number at end');
numbers.push(4,5);
console.log('numbers ',numbers);


//adding at begin
console.log('adding at begin');
numbers.unshift(0,1);
console.log('numbers ',numbers);


//adding in the middle
console.log('adding in the middle');
numbers.splice(2,0,'a','r');
console.log('numbers ',numbers);


//finding elements

const numbersOne=[1,2,3,4,1,5];

console.log(numbersOne.indexOf(1));
console.log(numbersOne.indexOf(1,3));
console.log(numbersOne.indexOf('1'));
console.log(numbersOne.lastIndexOf(1));


console.log(numbersOne.indexOf(1) !== 1);
console.log(numbersOne.includes(1));
