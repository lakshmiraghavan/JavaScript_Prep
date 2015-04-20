/**
 * Created by lakshmi on 4/20/15.
 */

//ToString

var s  = {
    x:1, y:3
}

console.log(s.toString());
var date = new Date();

console.log(date.toString());
console.log(date.toLocaleString());

var arr = [1,2,3,4,5];
console.log(arr.toString());
console.log(arr.toLocaleString());
var f= function (){
    return 1;
};

console.log(f.toString());

//toJSON
// JSON.stringify looks for toJSON method in an object to serialize it.

console.log(date.toJSON());


// valueOf: to convert an object to a primitive type other than a string. generally a number.
console.log(date.valueOf());
console.log(f.valueOf());
console.log(arr.valueOf());


