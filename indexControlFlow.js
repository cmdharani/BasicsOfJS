// this is all related to control flow

//if else
//switch
//for loop
//do while
//while

//for in  --> to iterate the properties of the object

let person={
    firstName:'madhu',
    age:40
};

for(let key in person)
{
    console.log(person[key]);

}


//For of --> to iterate the elements of the array

let colors=['red','green','yellow'];

for(let color of colors)
{
    console.log(color);
}


// break and continue



//@@@@@@@@@@@@@@@@@@@@@@@@@ Excerise

function getMaxNumber(a,b)
{
    // if(a<b)
    //     return b;

    // return a;

    return (a<b)?b:a
}

let maxNUmber=getMaxNumber(9,3);
console.log(maxNUmber);


function isLandscape(width,height){
   //return (width>height)?true:false;

   return (width>height);
}

let checkForLandscape=isLandscape(500,700);
console.log('isLandscape',checkForLandscape);



//FizzBuzz
//if it is divisble by 3, fizz
//if it is divisble by 5, buzz
//if it is divisble by 3 and 5, fizzbuzz
//if it is NOT divisble by 3 or 5, return the input
// if it is not a NUMBER, return NOT a number


function FizzBuzz(a)
{
    
   if(typeof(a) !== 'number')
    {
        return NaN;
    }
    else if((a % 3)=== 0 && (a % 5)=== 0)
    {
        return 'FizzBuzz'
    }
    else if((a%3) === 0)
    {
        return 'Fizz'
    }
    else if((a%5) === 0)
    {
            return 'Buzz'
    }
    else
     return a;
}


console.log('q',FizzBuzz('q'));
console.log('3',FizzBuzz(3));
console.log('5',FizzBuzz(5));
console.log('15',FizzBuzz(15));
console.log('7',FizzBuzz(7));
console.log('false',FizzBuzz(false));


//Demerits POints

//speed limit 70
//extra 5 speed , 1 point
//Math.floor(1.3) this needs to be used
//12 points- suspend

console.log('checkSpeed is going on')


function checkSpeed(speed)
{
    const speedLimit=70;
    const kmPerPoint=5;

    if(speed <= speedLimit + kmPerPoint)
    {
        console.log('OK');
    }
    else
    {
    const points= Math.floor((speed-speedLimit)/kmPerPoint);

    if(points >= 12)
        console.log('License suspened');
    else
        console.log('Points',points);

    }
}

checkSpeed(180);


//Show NUmbers

function showNumbers(limit)
{
    for(i =0;i<=limit;i++)
    {
        if(i%2 === 0)
            {
                console.log(i,'Even NUmber');
            }
        else
        {
            console.log(i,'Odd Number');
        }
        
        // let message= (i%2 === 0)?'Even Number':'Odd Number';
        // console.log(i,message);


    }
}

showNumbers(10);



//Show properties

var movie={

    title:'KGF',
    releaseYear:2019,
    rating:4,
    director:'Neel'

};


function   showProperties(obj)
{
    for (let key in obj) {
       
        if(typeof obj[key]==='string')
        {
            console.log(key,obj[key]);
        }
    }
   
}

showProperties(movie);



//function to sum the number of Multiple of 3 and 5 from the limit


function sumOfThreeAndFive(num)
{
    let count=0;
    for (let index = 0; index <= num; index++)
    {
        if((index%3) === 0 || (index % 5) ===0)
            {
                count += index;
            }
    }

    console.log('sum ',count);
}


sumOfThreeAndFive(10);




//show stars



let star='*'


function showStars(rows)
{
    
    
    for (let row = 1; row <= rows; row++) 
    {
        let starCount=''
        for (let index = 0; index < row; index++) 
        {
            starCount +='*'
        }
        console.log(starCount);
    }
}

showStars(10);



//Show Prime Numbers based on the number limits

function showPrimeNumber(limit)
{
    for (let index = 2; index < limit; index++) 
    {
        if((index%2 !==0))
        {
            console.log(index);
        }
        
    }
}

showPrimeNumber(20);


