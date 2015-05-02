/**
 * Created by lakshmi on 4/27/15.
 */
/*
Functions are executed using the scope chain that was in effect when they are defined.
 */

 var scope= "global_scope";
function checkScope() {
var scope = "local_scope";
    function f(){
        return scope;
    }
    return f();
}
console.log(checkScope());

var scope1= "global_scope";
function checkScope1() {
    var scope1 = "local_scope";
    function f(){
        return scope1;
    }
    return f;
}
console.log(checkScope1()());

//Function own property



function uniqueInteger(){
    uniqueInteger.counter = uniqueInteger.counter || 0;
    return uniqueInteger.counter++;
}
console.log(uniqueInteger()); //0
console.log(uniqueInteger());//1

// buggy or malicious code can reset the counter. Better option

var uniqueInteger1 = (function(){
    var counter = 0;
    return function()
    {
        return counter ++;
    }
}());
console.log(uniqueInteger1()); //0
console.log(uniqueInteger1()); //1
/*
Once outer function returns, no other code can see the inner counter variable.
Inner function has exclusive access to it.
 */

function counter(){
    var n = 0;
    return{
        count: function(){
            return n ++;
        },
        reset: function(){
            n = 0;
        },
        count2:function(){
            return n += 2;
        }
    };
}

var c = counter();
console.log("count2",c.count2());
console.log("count2",c.count2());
console.log("count",c.count());
console.log("count2",c.count2());
console.log("count",c.count());
/*
Counter using get and set
 */

function countset(n){
    return{
        get count(){
            return n++;
        },
        set count(m){
            if (m>n){
                n = m;
            }
            else throw Error("counter can only be set to larger value");
        }
    }
}
var p = countset(1000);
console.log(p.count);
p.count  = 1500;
console.log(p.count);

/*

 */

function constfunc(v){
    return function(){
        return v;
    };
}

var func = [];
for (var i = 0; i < 10; i++){
    func[i] =constfunc(i);
}

console.log(func[0]());

/*
Return an array of functions that return the values  0 -9
 */

function cons(){
    var func = [];
    for (var i = 0; i <10; i++)
        func[i] = function(){
            return i;
        };

        return func;

}

var func = cons();
console.log(func[5]());

//  this value of function to be accessed by closure

function outer (){
    console.log(this);
   // var self = this;

    return function(){

        console.log(this);
        return this;
    }();
}

outer(); // grrrrr!!!!












