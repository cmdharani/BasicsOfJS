
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


//removing elements

const numbersRemove=[1,2,3,4];

console.log(numbersRemove.pop());
console.log(numbersRemove);

console.log(numbersRemove.shift());
console.log(numbersRemove);



//removing elements
let numberRemove=[1,2,3,4,5,6];
let anotherNumberRemove=numberRemove;

//solution 1
numberRemove=new Array();
console.log('numberRemove ',numberRemove);
console.log('anotherNumberRemove ',anotherNumberRemove);

// //solution 2
// numberRemove.length=0;
// console.log('numberRemove ',numberRemove);



//sorting

const courses=[
    {id:1,name:'NodeJs'},
    {id:2,name:'javascript'},
    {id:3,name:'Abacus'}
];

courses.sort(
function(a,b)
{
    const nameA=a.name.toLocaleLowerCase();
    const nameB=b.name.toLocaleLowerCase();

    if(nameA<nameB) return -1;
    if(nameA>nameB) return 1;
    return 0
});

console.log(courses);



//testing the elements 

const numbersTesting=[1,-2,3,4];

const allPositive=numbersTesting.every(function(abc)
{return abc>=0;});

console.log(allPositive);

//filtering array
const numberFiltering=[1,-2,3,4];
let result=numberFiltering.filter(function(value){
 return value>0;
});

console.log(result);


//mapping the elements

const numbersMapping=[1,-2,3,4];

let items=numbersMapping.map(x=>
    
    ({value:x})
    
);

console.log('items',items);

// reducing array

const sum=numbersMapping.reduce(
    function(accumulator,currentvalue){
        return accumulator+currentvalue;
    },0);

console.log(sum);


//EXercise

//Array from Range



function arrayFromRange(min, max)
{
    const output=[];
    for (let index = min; index < max; index++) {
        output.push(index);
    }
    return output
}

const numberRange=arrayFromRange(-10,5);

console.log(numberRange);
