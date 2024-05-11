//working with arguments

function sumOfArg(a,b)
{
    let total=0;

    for (const iterator of arguments) {
        total +=iterator;
    }

    return total;
} 
console.log('with Arguments',sumOfArg(1,2))  ;
console.log('without Arguments',sumOfArg(1,2,3,34,5));


//working with spread operator
function sumWithSpreadOperator(...args)
{
    return args.reduce((a,b)=>a+b);
}

console.log(sumWithSpreadOperator(2,2,4,1,5));



//default parameters
function sayHello(title,firstName='john',lastName='smith')
{
    return `say hello to ${title}. ${firstName} ${lastName}`;
}


console.log(sayHello('mr')); //hello to mr. john smith
console.log(sayHello('mr','madhu','dharani'));



//getter and setter

const person={
    firstName:'madhu',
    lastName:'dharani',
    get fullName(){
        return  `say hello to ${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        var parts=value.split(' ');
        person.firstName=parts[0];
        person.lastName=parts[1];
    }

};

console.log(person.fullName);
person.fullName='Anil kumar';
console.log(person.fullName);