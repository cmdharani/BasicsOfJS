let circle={
radius:1,
location:{
    x:1,
    y:1
},
isVisible:true,
draw:function ()
{
    console.log('Draw');
},

drawing:drawing()

};

circle.draw();



function drawing()
{
    console.log('Drawing');
}


// if a function is part of any object, it is called as Method



//Factory Function

function createCircle(radius)
{
    return {

        radius,
        draw()
        {
            console.log('Drawing from updated Circle Function');
        }

    }
   

}
const circleUpdate=createCircle(4);
console.log(circleUpdate);
console.log(circleUpdate.draw());

//camel Notation : oneTwoThreeFour
//Pascal Notation : OneTwoThreeFour


//Constructor Function ( use equal to assign the value on the left hand side )
function Circle(radius)
{
    this.radius=radius;
    this.draw=function()
    {
        console.log('Constructor Function Drawing');
    }

}

const constCircle=new Circle(1);


//@@@@@  dynamic nature of object, where u can add and delete the properties

let circleDynamic={
    radius:4
};

circleDynamic.color='Red';
circleDynamic.draw=function(){ console.log('circleDynamic drawing')}


console.log(circleDynamic);




//Looping through object properties

let movie={
    rating:4,
    title:'KGF',
    director:'Neel',
    story:{
        storyPlot:'Action'
    }
};


for (const key in movie) {
    
    console.log(key,movie[key]);
}


for (const key of Object.keys(movie)) {
    console.log(key);
}



//copying the object

let movieAnother={};

for (const key in movie) {
   movieAnother[key]=movie[key];
}

console.log('movieAnother',movieAnother)

let movieAnother1=Object.assign({},movie);

console.log('movieAnother1',movieAnother1);


//copying using the SPREAD operator (...)

let movieAnother2={...movie};
console.log('movieAnother2',movieAnother2);

//does the below one works
let movieAnother3=movie;
console.log('movieAnother3',movieAnother3);




//string related


let message='hi';
console.log('message variable', typeof message);

let anotherMessage= new String('Hi again');
console.log('anotherMessage variable', typeof anotherMessage);


//template Literals, which allows you to format the content by NOT using the \n or other escape characters

let emailName='Dharani';

let emailContent=`hi ${emailName}

thanks for the email.

regards
Madhu

`;

console.log(emailContent);




//exercise




