Prototype questions:

What is class of an object. (Difference between class and prototype)

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

