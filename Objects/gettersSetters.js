/**
 * Created by lakshmi on 4/17/15.
 */
//Properties defined by getters and setters are accessor properties
/*
When a program queries the value of an accessor property, JavaScript invokes the getter method.
The return value if the method becomes the return value of  the property access expression.
when a program sets the value of an accessor property, JavaScript invokes the setter method, passing the value
of the right hand side of the assignment. The return value of the setter method is ignored.
Accessor properties do not have writable attributes as data properties do.
 */
//getter implementation
var random = {
    get octet(){return Math.floor(Math.random()*256);},
    get uint16(){return Math.floor(Math.random()*256);},
    get int16(){return Math.floor(Math.random()*65536)-32768;}
};
console.log(random.octet);
console.log(random.uint16);
console.log(random.int16);

//getter and setter 2D cartesian example

var p = {
    //x:1.0,
    //y:1.0,
    get r(){return Math.sqrt(this.x*this.x + this.y*this.y);},
    set r(newvalue){
      //  var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
    //    var ratio = newvalue/oldvalue;
  //      this.x = x;
//        this.y = y;
    }
};
//console.log(p.get());

console.log(p.x);
console.log(p.y);
console.log(p.r);
p.x=10;
p.y=10;
console.log(p.x);
console.log(p.y);
console.log(p.r);







