/**
 * Created by lakshmi on 4/24/15.
 */
/*
If a function is invoked with fewer parameters than required, value of remaining parameters are set to undefined.
 */
function getPropertyNames(o,a){
    if(a == undefined){
        a = [];
    }
    else{
        for (var prop in o){
            a.push(prop);
        }

    }
    return a;
}

var obj = {x:1, y:2, z: 3, p:6};
console.log(getPropertyNames(obj));
var x = getPropertyNames(obj);// getting obj's properties in a new array and then passing the array

console.log(getPropertyNames(obj,x));
var obj1 = {p:8,g:5};
var y = getPropertyNames(obj1);
console.log(getPropertyNames(obj1));// empty array
console.log(getPropertyNames(obj1,x)); // adding oj properties to obj1

//Variable length argument lists

function f(x,y,z)
{
    if(arguments.length < 3){
        throw new Error ("function  f called with "+arguments.length
        + " arguments, but it expects "+f.length +" arguments.");
    }
    else return arguments.length;
}
console.log(f(1,2,3));


//max value by accepting any number of arguments

function max(){
    var maxValue = Number.NEGATIVE_INFINITY;

    for (var i = 0; i < arguments.length; i++){
        if(arguments[i] > maxValue){
            maxValue = arguments[i];
        }
    }
    return maxValue;

}

console.log(max(2,3,12,23,45,56));

//Changing the array element name  through arguments also changes the array element name.

function f(x){
    console.log(x);
    arguments[0] = null;
    console.log(x);
    console.log( arguments[0]);

}
f(6);


//Callee and caller function.

var factorial = function(n){
    if(n<=1){
        return 1;
    }
    else{
        return n * arguments.callee(n-1);
    }
}
console.log(factorial(5));


function square(x){

    return x*x;

}
function b(y){
    return square(y);
}
console.log(b(3));

console.log(square.caller === b); //this gives false


