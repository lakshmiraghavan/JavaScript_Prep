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
//in non-strict mode: this is the windows function
//

/*
Invoke as methods
 */

/*
Invoke as constructors
 */

/*
Indirect Invocations
 */

