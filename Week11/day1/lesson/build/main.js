"use strict";
// let username = "John";
// let age = 25;
// username = "Daniel";
// let a = 12;
// let b = "12"
// let c = 2;
// console.log(a+b);
let a = 12;
let b = "abc";
let bool = true;
let anyVar = 12;
const sum = (a, b) => {
    if (typeof b === "string") {
        return a + b + "";
    }
    return a + b;
};
console.log(sum(2, 6));
let union = 12;
union = "abc";
let union2;
let re = /\w+/g;
let strarr = ["a", "b", "c"];
strarr[1] = '1';
let myTuple = ['a', 1, true];
let myObj = {};
myObj = [];
const myObj2 = {
    name: "John",
    age: 25,
};
myObj2.age = 30;
let user = {
    name: "John",
    age: 25,
};
let myinterface = {
    array: ["a", 1, true]
};
const printUseer = (user) => {
    console.log(user);
};
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade[0]);
