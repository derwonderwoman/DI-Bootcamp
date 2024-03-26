// #excercise 1
const people = ["Greg", "Mary", "Devon", "James"];

people.shift()
people[2] = 'Jason'
people.push("Kseniia")
let result = people.indexOf("Mary")
let copy = people.slice(1)
let result2 = people.indexOf("Foo")
let last = people[people.length - 1]
console.log(last)
let devon_index = people.indexOf("Devon")
for(let i = 0; i<= devon_index; i++){
    console.log(people[i])
}

// #exercise 2
const colors = ["red", "yellow", "black", "blue", "green"]
const suffixes = ["st", "nd", "rd", "th"]

for (let i = 0; i < colors.length; i++){
    console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

for (let i = 0; i < colors.length; i++){
    let suffixIndex = (i < 3) ? i : 3;
    console.log("My " + (i + 1) + suffixes[suffixIndex] + " choice is " + colors[i]);
}

// #exercise 3
let number = prompt("Give me a number")
while(number < 10){
    number = prompt("Give me a number")
}
console.log(typeof(number))

// #exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log("number of floors in the building :", building.numberOfFloors)
console.log("the amount of apartments on the floors 1 and 3: is ", building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)
let second_tenant=building.nameOfTenants[1];
let first_tenant = building.nameOfTenants[0];
let third_tenant = building.nameOfTenants[2];
console.log("the seciond tenant is ", second_tenant)
console.log("the number of rooms he has in the apartment ", building.numberOfRoomsAndRent[second_tenant.toLowerCase()][0])
let first_tenant_rent = building.numberOfRoomsAndRent[first_tenant.toLowerCase()][1];
let second_tenant_rent = building.numberOfRoomsAndRent[second_tenant.toLowerCase()][1];
let third_tenant_rent = building.numberOfRoomsAndRent[third_tenant.toLowerCase()][1];

if(first_tenant_rent + third_tenant_rent > second_tenant_rent){
    building.numberOfRoomsAndRent[second_tenant.toLowerCase()][1] = 1200;
    console.log("now Dan's rent is 1200")
    console.log(building.numberOfRoomsAndRent)
}
else {
    console.log("Dan's rent is not changing")
}

// #exercise 5

const family = {
    family_member: {
        father: "Kosta",
        mother: "Kseniia",
        son: "Lev",
        daughter: "Eva"
    }
}

console.log("Keys in Family are: ");
for(let key in family.family_member){
    console.log(key)
}

console.log("Values in Family are: ");
for(let key in family.family_member){
    console.log(family.family_member[key])
}

// #exercise 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
text = " ";
for(let key in details){
    text += key + " "+ details[key] + " "
}
console.log(text.trim())

// #exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secret = ""
for(let name of names){
        secret += name[0];
    }
console.log(secret.split("").sort().join(""))