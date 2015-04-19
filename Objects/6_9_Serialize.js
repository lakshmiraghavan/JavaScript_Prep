/**
 * Created by lakshmi on 4/18/15.
 */
/*
converting an objects state to a string
JSON.stringify - serialize
 JSON.parse - restore
 */
var o = {x:1, y:{z:[false,null,""]}};
var x = JSON.stringify(o);
var p = JSON.parse(x);
console.log(o);
console.log("JSON to javascript: ", x);
console.log("javascript to JSON: ",p);

