// exercise1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// the output will be: I am John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207
// because we defined this variables in the person object

// exercise2

// objUser = {
//     first: "John",
//     last: "Snow"
// }

// function displayStudentInfo(objUser){
//     const {first,last} = objUser;
//     console.log(`Your full name is ${first} ${last}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// exercise3

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// console.log(Object.entries(users))

// function Turn(object){
//     for (let [key, value] of Object.entries(object)) {
//         object[key] = value*2;
//        }
//     return object
// }
// Turn(users);
// console.log(Object.entries(users))

// exercise4

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

//   it will bw an object

// exercise5

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name)
//       this.size = size;
//     }
//   };  

// let dog = new Labrador("Bulk", "big")
// console.log(dog)

// exercise6

// Evaluate these (ie True or False)

// [2] === [2] - False
// {} === {} -False, because they're different objects

// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) -4
// console.log(object3.number) -4
// console.log(object4.number) -5

// class Animal{
//     constructor(name,type, color){
//         this.name = name,
//         this.type = type,
//         this.color = color
//     }   
// }

// class Mamal extends Animal{
//     constructor(name,type,color){
//         super(name,type,color)
//     }
//     sound(sound) {
//         console.log(`${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`)
//     }
// }
// let farmerCow = new Mamal("Lily", "cow", "white");

// farmerCow.sound("Mooo")
