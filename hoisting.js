//example1
// var x = 6;

// function getName(){
//     console.log("hello");
// }

// getName();           //hello
// console.log(x);      //6


//example2
getName();           //hello
console.log(x);      //undefined

var x = 6;

function getName(){
    console.log("hello");
}


//example3

// getName();           //hello
// console.log(x);      //ReferenceError: x is not defined

// function getName(){
//     console.log("hello");
// }


//example4

// function getName(){
//     console.log("hello");
// }

// console.log(getName);        //fn: getName(){...}


//example5

// console.log(getName);          //fn: getName(){...}

// function getName(){
//     console.log("hello");
// }


//example6

// getName();         //TypeError: getName is not a function it behaves like variable and undefined will be assigned to it

// var getName = () => {
//     console.log("hello");
// }


//example7

// getName();

// var getName = function(){
//     console.log("hello");       //TypeError: getName is not a function
// }