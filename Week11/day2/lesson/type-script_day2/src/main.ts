// import './style.css'
// type StrOrNum = string | number | boolean;

// type StrOrNumArr = (string | number)[];

// type Student = {
//   name: string;
//   age: number;
//   isGood: StrOrNum;
// };

// type Name = "John" | "Jane" | "Doe";

// let username: Name = "Jane";

// type addFunc = (a: number, b: number) => number;

// const add: addFunc = (a, b) => {
//   return a + b;
// }

// const addRest = (a: number, ...rest: number[]): number => {
//   return rest.reduce((acc, val) => acc + val, a);
// };

// console.log(addRest(100,3,4,5,6))

// const throwError = (message: string): never => {
//   throw new Error(message);
// }

// const infinite = () => {
//   let i: number = 1
//   while (true) {
//     i++
//   }
// }

// type One = string;
// type Two = string | number;
// type Three = "hello";

// let a: One = "hello";
// let b = a as Two;
// let c = a as Three;

// let d = <One>"world";

// console.log(d);

// const img = document.querySelector("img") as HTMLImageElement;


// const year = document.getElementById("year")as HTMLImageElement;
// const thisYear =new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;


// class User {
//   constructor(public name: string,private age: number, protected active: boolean){}

//   getAge(){
//     return `My age is ${this.age}`
//   }
// }

// class Student1 extends User {
//   constructor(name: string, age: number, active: boolean){
//     super( name,age,active);
//   }

//   }


interface UserInterface {
  name: string,
  age:number,
  active:boolean;
}

class User implements UserInterface {

  constructor (
    public name : string,
    public age : number,
    public active : boolean,
  ) {}
}
