/**
 * Created by lakshmi on 4/23/15.
 */
/*
Invoke as functions
 */
function printprops(obj){
    for (var props in obj){

          console.log("property: " + props + " " + "value: " + obj[props]);
    }
}

printprops({x:1,y:2});

//Invocation context is global object
// In strict mode, the invocation context is undefined.
"use strict";
var strict = (function(){
    return this;
}());
console.log(strict);
//In ECMAScript 3 in non-strict mode: this is the windows object. in strict mode it return undefined.
//In ECMAScript5 it always returns windows object

/*
Invoke as methods
 */
var person = {
    firstName: "Lakshmi",
    lastName: "Raghavan",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());
person.middleName = "Nothing";
person.addMiddleName = function(){
    return this.firstName + " " + this.middleName + " "+ this.lastName;
}
console.log(person.addMiddleName());
person.middleSecondName = function(x){
    return x;
}

console.log(person.middleSecondName("try"));
//Difference b/w function and method invocations: invocation context.

var calc = {
    operand1: 1,
    operand2: 2,
    add:function(){
    this.result  = this.operand1+this.operand2
        return this.result;
    }
  }
console.log(calc.add());
console.log(calc.result);

function calculator (){

    var operand1 = 1;
    var operand2 = 2;
    var add = function(){
        var result  = operand1 + operand2;
        return result;

    }
    return add();

}

console.log(calculator());

//Method chaining: return value of one method can be used to invoke the other

//TBD

/*
Invoke as constructors
 */

var o = new Object();
console.log(o);
var o = new Object;
console.log(o);
//both are the same. Not an error
/*
 new object is the value of the invocation context, unless the constructor uses the return statement
 to return an object, then that object becomes the invocation expression value.
 If return value is primitive or if it says just return, then it is ignored and new object is used as
 invocation context.
  */

function A(){
    return;
}
console.log( new A() );

function B(){
    return (this);
}
console.log( new B() );

function C(){
    return("string");
}
console.log(new C());


function D(){
    return (123);
}
console.log(new D());

function E(){
    return ({foo:"bar"});
}
console.log(new E());

function F(){
    return (["foo","bar"]);
}

console.log(new F());
//example

function G(){
    return (new A());
}
console.log(new G());

function H(){
    return (new Number(123));
}
console.log(new H());


/*
Indirect Invocations
 */
//TBD in call apply bind section
