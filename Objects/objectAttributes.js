/**
 * Created by lakshmi on 4/20/15.
 */
//prototype, class, extensible

var x = {y:1};

console.log(Object.getPrototypeOf(x));
console.log(x.constructor);

var p={g:4};
var m = Object.create(p);

console.log(p.isPrototypeOf(m));
console.log(Object.prototype.isPrototypeOf(m));

//class

console.log(Object.prototype.toString.call(p).slice(8,-1));
console.log(Object.prototype.toString.call(m).slice(8,-1));
/*
null == null
undefined==undefined
 */

function classOf(o){
    if(o === null) return "null";
    if(o === undefined) return "undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

console.log(classOf(null));
console.log(classOf((window)));
console.log(classOf(("")));

function f(){};
console.log(classOf(new f()));

//Extensible attribute

var  ex = {x:1};
var ex1 = Object.create(ex);
ex1.u = 5;
ex1.h = 6;
ex1.w = 7;
Object.preventExtensions((ex1));
// prevent Extensions: No new properties can be added
console.log(ex1.h);
console.log(ex1.u);
console.log(ex1.x);
ex.z = 10;
console.log(ex1.z);
ex1.u =15;
console.log(ex1.u);
delete ex1.h;
console.log(ex1);


// Is sealed. New properties cannot be added. Existing properties cannot be deleted

Object.seal(ex1);
console.log(Object.isSealed(ex1));
ex1.y =0;
console.log(ex1.y);
console.log(ex1);
delete ex1.u;
console.log(ex1);
ex1.w =17;
console.log(ex1);


//non extensible, non configurable and read only.

Object.freeze(ex1);
console.log(Object.isFrozen(ex1));
console.log(ex1);
ex1.w = 20;
console.log(ex1);






