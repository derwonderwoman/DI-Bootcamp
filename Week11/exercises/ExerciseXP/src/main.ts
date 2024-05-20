import './style.css'

console.log("Hello World")

let age: number = 32;
let name: string = "Kseniia";

console.log(name + ":" + age)

let id: number | string = 12;

function compare (a: number): string {
  if (a === 0){
    console.log("zero");
    return "zero"
  }
  else if ( a > 0){
    console.log("positive");
    return "positive"
  }
  else if (a < 0){
    console.log("negative");
    return "negative"
  }
  else return "undefined"
}

compare(id);

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b
}

console.log(add(1,5));

function getDetails (name:string, age: number):[string,number,string] {
  console.log("Welcome," ,name)
  return [name, age, "Welcome"]
}

getDetails("Kseniia", 32)

function createPerson (name: string, age: number) {
  let User = {
    name: name,
    age: age,
  };
  return User;
}

console.log(createPerson("John", 32))

let day: number = 3;
let dayName: string;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`The day is ${dayName}`);

function greet(name?: string, age?: number): { name: string, age: number };
function greet(name: string ='uuu', age: number=9) {
    return { name, age};
  }


  console.log(greet())
