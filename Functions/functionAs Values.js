/**
 * Created by lakshmi on 4/28/15.
 */

var a  =[function(x){
    return x*x;
},20];

console.log(a[0](a[1]));

//Functions used as values
/*
A function that takes one of the above functions as argument and invokes it on two operands
 */

function operate(operation, operand1, operand2){
    var x = operators[operation];
  //  console.log(operation);
    if(typeof x === "function")
    return x(operand1,operand2);
    else throw "operator not defined";
}

var operators ={

    add: function(x,y){
        return x+y;
    },
    subtract: function(x,y){
        return x-y;
    },
    multiply: function(x,y){
    return x*y;
},
    divide:function(x,y){
        return x-y;
    }

}
console.log(operate("add",1,2));
//console.log(operate("sum",1,2));

/*
Functions as values: Arrays.sort()
 */


var fruit = ['cherries', 'apples', 'bananas'];
console.log(fruit.sort()); // ['apples', 'bananas', 'cherries']

var scores = [1, 112, 1112, 21];
console.log(scores.sort(function(a,b){
    return a-b;
})); // [1, 10, 2, 21]
// Watch out that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.

var things = ['word', 'Word', '1 Word', '2 Words'];
console.log(things.sort()); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.

//sorting based on name:

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];


console.log(items.sort());
items.sort(function(a,b){
    if(a.name > b.name)
    return 1;

    if(a.name < b.name)
    return -1;

    return 0;
});

console.log(items.sort());

items.sortVal(function(a,b){

    return a.value - b.value;
});

console.log(items.sortVal());







