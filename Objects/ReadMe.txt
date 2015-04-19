Prototype questions:

What is class of an object. (Difference between class and prototype)

Class: Categorizes the type of object.
Prototype: Parent of an object.


What is the prototype of null or empty object


 //Property access errors
    //Not an error to access a property that doesnot exist
    var obj1 = {
        x:1,
        y:2,
        p:3
    }
    console.log(obj1.m); //undefined

    console.log(obj1.m.length); //Type error. m doesn't exist
    // check to prevent type exceptions
    var len = obj1 && ("m" in obj1) && obj1.m.length;
    console.log(len); //should not get a type error . I am getting one


    object has a ready only property .Value cannot be set.
    Can it be set by setter method?
    book says: There is an exception that allows configurable read only properties to be set??

    Page 126

-----------------------------------------------

var o4 = {};
o4.x = 5;
var o5 = new Object(o4);

console.log(o5.hasOwnProperty("x")); // Ayyooo!! It shows true

According to this reference, the Object() function, when used as a constructor returns a wrapper around the primitive value. If the the value is already an object, it returns a reference to the object itself.

Try o4 === o5

There is no inheritance involved. It is a direct reference.