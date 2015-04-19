/**
 * Created by lakshmi on 4/18/15.
 */
//6.1.1

var obj = {x:1};
var obj2= {y:obj.x+5};
//console.log(obj2);
obj.for = "test";
//console.log(obj);

for (var i = 0; i < 5; i++){
    var obj = {x:1};
  //  console.log(obj);
}


//var o1 = Object.create();
var o2 = Object.create({});
var o3 = Object.create(null);

//console.log(Object.getPrototypeOf((o1)));
//console.log(Object.getPrototypeOf((o2)));
//console.log(Object.getPrototypeOf((o3)));


var o4 = {};
o4.x = 5;
var o5 = new Object(o4);

//console.log(o5.hasOwnProperty("x")); // Ayyooo!! It shows true
//---
    //Object.create()
var l1 = {x:1};
var l2 = Object.create(l1, {y: {value: 8}});
//console.log(l2);

//
var x={
    y:2,
    get r(){
        return this.y;
    },
    set r(newValue){
        this.y = newValue;
    }
};

Object.defineProperty(x, "y", {writable: false});
console.log(x);



//console.log(x.y);

x.r = 7;

console.log(x.y);



