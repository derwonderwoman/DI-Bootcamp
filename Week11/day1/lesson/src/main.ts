// let username = "John";
// let age = 25;

// username = "Daniel";

// let a = 12;
// let b = "12"
// let c = 2;

// console.log(a+b);

let a: number = 12;
let b: string = "abc";
let bool: boolean = true;
let anyVar: any = 12;

const sum = (a: number,b: string | number): string | number =>{
    if (typeof b === "string") {
        return a + b + "";
    }
    return a + b;
}

console.log(sum(2, 6));

let union: number | string = 12;
union = "abc";
let union2: number | string | boolean;

let re: RegExp = /\w+/g;

let strarr: string[] = ["a", "b", "c"];

strarr[1] = '1';

let myTuple: [string,number,boolean] = ['a', 1, true];

let myObj: object = {};
myObj = [];

const myObj2 = {
    name: "John",
    age: 25,
};

myObj2.age = 30;

type User = {
    name: string;
    age: number;
}

let user: User = {
    name: "John",
    age: 25,
};

interface myinterface {
    array: [string,number,boolean];
}

let myinterface: myinterface = {
    array: ["a", 1, true]
}

const printUseer = (user: User) => {
    console.log(user);
}

enum Grade {
    U = 1, 
    D,
    C,
    B,
    A,
}

console.log(Grade[0]);
