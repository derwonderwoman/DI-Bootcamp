// exercise #1

class Person {
  constructor(private firstName: string,private secondName: string, public age: number, protected address: string){}

  getFullName(){
    console.log(`My fullname is ${this.firstName} ${this.secondName}`);
    
    return `My fullname is ${this.firstName} ${this.secondName}`
  }
}

const newUser = new Person("Kseniia", "Tokareva", 32, "Raanana")

newUser.getFullName();

// exercise #2

interface Vehicle {
  model: string,
  make: string,
  start(): string
}

interface Car extends Vehicle{
  number_of_doors:number,
}

class Sedan implements Car {
  constructor(
    public model:string,
    public make: string,
    public number_of_doors:number) {}

    start(): string {
      return "The car is driving now..."
    }
}

const Mitsubishi = new Sedan("Space Star", "Japan", 5);

console.log(Mitsubishi.start());

// exercise #3

function combineObjects<T, U>(obj1:T, obj2: U): T & U {
  return {...obj1, ...obj2}
}

const obj1 = {"key":"value"};
const obj2 = {"newkey":"newvalue"};

console.log(combineObjects(obj1,obj2));

// exercise #4

class Stack<T> {
  private elements: T[];

   constructor(){
    this.elements = []
   }
  
  push(item: T): void{
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  isEmpty():boolean {
    return this.elements.length === 0;
  }
}
  // exercise #5

  function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
    return array.filter(predicate);
  }
