// // #exercise 1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((item, index) => {
//     console.log(`${index + 1}# choice is ${item}`);
// });

// function check(){
//  if(colors.some(value => value ==='Violet'))
//  {
//     console.log("Yeah")
//  }
//  else{console.log("No")}
// }

// check()

// // exercise 2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];


// colors.forEach((item, index) => {
//     let i = index <= 2 ? index + 1 : 0
//     console.log(`${index + 1}${ordinal[i]} choice is ${item}`);
// });

// // exercise 3
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// // [bread, carrot, potato, chicken, apple, orange]

// const country = "USA";
// console.log([...country]);

// // [U,S,A]

// let newArray = [...[,,]];
// console.log(newArray);

// // [undefined, undefined]

// exercise 4

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeStudents = users.map((value) => `Hello ${value.firstName}`);

// const fullStack = users.filter((value) => value.role === 'Full Stack Resident');

// const lastNames = (users.filter((value) => value.role === 'Full Stack Resident')).map((value) => `${value.lastName}`)

// exercise 5

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let starWars = epic.reduce((acc, val) =>{
//     return acc+' ' + val + ' ';
// })

// exerise 6

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passed = students.filter((value)=> value.isPassed === true );

passed.forEach((val) => {
    console.log(`Good job ${val.name}, you passed the course in ${val.course}`)
})