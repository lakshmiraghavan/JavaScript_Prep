/**
 * Created by lakshmi on 4/22/15.
 */
//console.log("hi")

/*
Print the name and value of each property
 */

function printprops(obj){
    for (var props in obj){

      //  console.log("property: " + props + " " + "value: " + obj[props]);
    }
}
var o = {x:1, y:2,z:3};

//console.log(printprops(o));
//will return undefined as there is no return type

/*
Cartesian points
 */

function distance (x1,x2, y1,y2){

    return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
}

console.log(distance(2,3,4,5));

/*
recursion example: a function that calls itself
 */

function factorial (x){
    if (x <=1)


        return 1;


    else{
        console.log(x);


        return (x*factorial(x-1));
    }

}
console.log(factorial(5));

/*
Function expression
 */

var square = function(x){
    return x*x;
}
console.log(square(5));

/*
Function expression with function name:with factorial
 */

var factorial = function fact(x){
    if(x <= 1)
    return 1;

    else
    return x * fact(x-1);
};
 console.log(factorial (5));

/*
Immediately invoked function expression
 */

var squared = (function(x)
{
    return x*x;
}(10));

console.log("square",squared);


/*
function name is optional in function expression
 */

/*
Function declaration statements are hoisted to the top of the enclosing script or function.
Function expressions assigned to variables: variables are hoisted, but assignments are not.
So they cannot be invoked before they are defined.
 */

function foo(){
    return bar();
    var bar = function() {
        return 3;
    };

}
//console.log(foo());
//this gives type error

function foo2(){
    return bar();
    function bar (){
        return 3;
    }
}
//console.log(foo2());
//this returns 3


// Nested functions:

function hypnotuse(a,b){


    return Math.sqrt(square(a) + square(b))

    function square (x){
        console.log(x);
        return x*x;
    }

}

console.log(hypnotuse(5,4));
// Scope: Inner function can access variables of outer functions.
//function declarations donot appear in try/catch/finally or inside loop statements. Function expressions
//may appear anywhere
















