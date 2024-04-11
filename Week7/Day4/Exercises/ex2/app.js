import  {people} from './data.js';

const avAge = (array) => {
    let sum = 0;
    let i = array.length;
    for(const a of array){
        sum += a.age;
    }
    const average = sum/i;
    return average;
}

let average = avAge(people);
console.log(average);