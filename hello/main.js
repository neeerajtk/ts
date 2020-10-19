"use strict";
exports.__esModule = true;
var msg = 'Welcome';
console.log(msg);
// compile using tsc main.ts 
// tsc main --watch 
var sum = 10;
var y = 20;
var title;
var help = 'title';
var isBeginner = true;
var total = 4;
var name = 'Neeraj';
var sent = "I'm " + name + "\nI'm new to Typescript";
console.log(sent);
var n = null;
var u = undefined;
var new1 = undefined;
var new2 = null;
// Array 
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
// above is used for same type , when mixed type we use tuples 
var person1 = ['neeraj', 22];
// has exactly one string and one number in the same defined order
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// prints the location of Green , that is 1
var Car;
(function (Car) {
    Car[Car["Maruthi"] = 4] = "Maruthi";
    Car[Car["Honda"] = 5] = "Honda";
    Car[Car["Hyundai"] = 6] = "Hyundai";
})(Car || (Car = {}));
;
var d = Car.Honda;
console.log(d);
// Prints 5 
var randomVal = 0;
randomVal = 'neeraj';
randomVal = 1;
// randomVal.toUpperCase();
console.log(randomVal);
var myVariable = 1;
myVariable.toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
console.log(myVariable);
