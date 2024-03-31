// #exercise1

//#1

// the value of 'a'will be 3, it can't be done with const, because we cannot reassign it

//#2

// the value of 'a'will be 0, after that it's gonna be 5. it can't be done with const, 
// because we cannot reassign it, but the first function will be ok

//#3

// the value of 'a' will be 'hello'. 

//#4

// the value of 'a' will be 'test', because here we're in the other scope. If we'd declare the
// a as a const - nothing will change for us in both variables, cause we are not changing the variable

//#5

// the first alert will be 5, and the second is 2, we can make it const, nothing will be changed

// #exercise2
// let winBattle = () => true;

// let experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

// #exercise3

// const isString = (a) => {
//     return typeof a === 'string';
// }
// console.log(isString('hello'));
// console.log(isString([1, 2, 4, 0]));

// #exercise4

// const sum = (a,b) => a + b
// console.log(sum(3,2))

// #exercise5

// function Convert(a){
//     return a*1000;
// }

// const weight = function(a){
//     return a*1000;
// }

// const convert = (a) => a*1000;

// console.log(convert(2));

// #exercise6

// (function(number, name, location, title) {
//     let sentence = "You will be a " + title + " in " + location + ", and married to " + name + " with " + number + " kids.";
//     document.body.innerHTML = `<h1>${sentence}</h1>`;
// })(2, "Konstantin", "Ireland", "developer")

// #exercise7

// (function(name){
//     let greeting = document.createElement('div')
//     greeting.textContent = `Hi, ${name}`;
//     let navbar = document.getElementsByTagName('nav')[0]
//     navbar.appendChild(greeting);
    
//     let profilePicImg = document.createElement('img');
//     profilePicImg.src = './pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg';
//     navbar.appendChild(profilePicImg);
// })('John')

// #exercise8

// function makeJuice(size){
//     const ingredients = [];
//     function addIngredients(ing1,ing2,ing3){
//         ingredients.push(ing1,ing2,ing3);   
//     }
//     function displayJuice(){
//         let sentence =`The client wants a ${size} juice, containing ${ingredients}`;
//         document.body.innerHTML = `<h1>${sentence}</h1>`;
//     }
//     addIngredients("milk","coconut", "pineapple");
//     addIngredients("corn syrop", "rum", "ice");
//     displayJuice()
// }
// makeJuice("small");
