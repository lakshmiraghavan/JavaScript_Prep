/**
 * Created by lakshmi on 4/19/15.
 */

console.log(Object.getOwnPropertyDescriptor({x:1},"x"));


var random = {
    get octet(){return Math.floor(Math.random()*256);},
    get uint16(){return Math.floor(Math.random()*256);},
    get int16(){return Math.floor(Math.random()*65536)-32768;}
};

console.log(Object.getOwnPropertyDescriptor(random, "octet"));

console.log(Object.getOwnPropertyDescriptor({}, "x")); //undefined

console.log(Object.getOwnPropertyDescriptor({}, "toString")); //undefined (as it is inherited.)

//Object.defineProperty

//Starting with empty obj and then building up

var  obj = {};
Object.defineProperty(obj, "x",{value:2, enumerable:false, configurable: true});
console.log(obj);
console.log(obj.x);
console.log(obj);
console.log(Object.keys(obj)); //empty as it takes only enumerable properties
Object.defineProperty(obj, "x",{value:2, writable:false});
obj.x =3;
console.log(obj.x); //still 2
Object.defineProperty(obj, "x",{get: function() {return  1;}, configurable:true});
console.log(obj.x);

//Object.defineProperties

var p = Object.defineProperties({},{
    x:{value:1, writable: false},
    y:{value:2, enumerable: false},
    r:{get function(){ return 0;}}
})

// Type Errors:

var obj2 = {y:2, p : 9};

Object.preventExtensions(obj2);
console.log(Object.isExtensible(obj2));
obj2.z = 3;
console.log(obj.z);
obj2.y = 5;
console.log(obj2.y);

Object.defineProperty(obj2, "p", {configurable: false});
console.log(obj2.p);
Object.defineProperty(obj2, "p", {writable: false});
obj2.p=10;
console.log(obj2.p); // writable can be changed from true to false


/*
if data is not configurable and not writable, its value cannot be changed. But the value of a
configurable and non writable property can be changed by making it writable and value being changed.
 */

/*If an accessor property is not configurable, its value cannot be changed*/

var o = {};
Object.defineProperty(o, 'a', {
    get: function() { return 1; },
    configurable: false
});

//console.log(Object.defineProperty(o, 'a', { configurable: true })); // throws a TypeError
//console.log(Object.defineProperty(o, 'a', { enumerable: true })); // throws a TypeError
//console.log(Object.defineProperty(o, 'a', { set: function() {} })); // throws a TypeError (set was undefined previously)
//console.log(Object.defineProperty(o, 'a', { get: function() { return 1; } })); // throws a TypeError (even though the new get does exactly the same thing)
//console.log(Object.defineProperty(o, 'a', { value: 12 })); // throws a TypeError

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1

//Adding a non enumerable extend method to Object.prototype

Object.defineProperty(Object.prototype, "extend", {
    writable :true, enumerable:false,configurable:true,
    value:function(o){
        var names = Object.getOwnPropertyNames(o);

        for (var  i=0; i< names.length; i++){
            if(name[i] in this) continue;
            var desc = Object.getOwnPropertyDescriptor(0,names[i]);
            Object.defineProperty(this, names[i],desc);
        }
    }
});

console.log(Object.prototype.hasOwnProperty("extend"));

// Practise2

Object.defineProperty(Object.prototype, "extend", {
  enumerable:false, writable: true, configurable:true, value :function(obj){
        console.log("which object",obj);
      var names = Object.getOwnPropertyNames(obj);
        console.log("this", this);
        for (var i=0; i< names.length; i++){

            if(names[i] in this) continue;
            var desc = Object.getOwnPropertyDescriptor(obj, names[i]);
            Object.defineProperty(this, names[i],desc);

        }
    }
})

var obj3 = {x:1, z:5, b:3};
var obj4 = {y:4, z:6};
Object.prototype.extend(obj3);
console.log(obj3);
console.log(obj4);



