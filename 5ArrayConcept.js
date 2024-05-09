
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


//finding elements primitives

const numbersOne=[1,2,3,4,1,5];

console.log(numbersOne.indexOf(1));
console.log(numbersOne.indexOf(1,3));
console.log(numbersOne.indexOf('1'));
console.log(numbersOne.lastIndexOf(1));


console.log(numbersOne.indexOf(1) !== 1);
console.log(numbersOne.includes(1));



//finding elements Reference type

console.log('\nFinding elements Reference type')

const movies=[
    {id:1,name:'a'},
    {id:2,name:'b'},
];

const movie=movies.find(function(movie){
    return movie.name==='a'
});

console.log(movie);

const movie1=movies.find(function(movie){
    return movie.name==='xyz'
});

console.log(movie1);

console.log('Arrow function');

const movie2=movies.find(movie=> movie.name ==='a');
console.log(movie2);
