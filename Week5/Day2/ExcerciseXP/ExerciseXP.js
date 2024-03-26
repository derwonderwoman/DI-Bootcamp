// #exercise 1

function displayNumbersDivisible(divisor){
    let sum = 0;
    for(let i = 0; i <= 500;i++){
        if (i % divisor == 0){
            sum += i;
            console.log(i)
        }
    }
    console.log(sum);

}

displayNumbersDivisible(12);

// #exercise 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill(){
    let sum = 0;
    for(word of shoppingList){
        for(key in stock){
            if (word == key && stock[key]>0){
                stock[key] --;
                sum += prices[key];
            }
        }
    }
    console.log(sum);
}

myBill();

// #exercise 3

function changeEnough(itemPrice,amountOfChange){
    let result = false;
    let sum = 0;
    quarter = amountOfChange[0];
    dime = amountOfChange[1];
    nickel = amountOfChange[2];
    penny = amountOfChange[3];
    sum = (quarter * 0.25) + (dime * 0.10) + (nickel * 0.05) + (penny * 0.01);
       if (itemPrice <= sum){
        result = true
    }
    console.log(result)
}

changeEnough(4.25, [25, 20, 5, 0]);
changeEnough(14.11, [2,100,0,0]);
changeEnough(0.75, [0,0,20,5]);

//  #exercise 4

function hotelCost(user_input) {
    let total_price = 0;
    do {
        if (user_input !== null && !isNaN(user_input)) {
            total_price = user_input * 140;
        } else {
            console.log("Invalid input or user canceled the prompt. Please enter a valid number.");
        }
    } while (user_input === null || isNaN(user_input));

    console.log("Total price: $" + total_price);
    return total_price;
}


function planeRideCost(user_input2){
    let flight_price = 0;
    do {
        if (user_input2 !== null && isNaN(user_input2)) {
            if (user_input2 === "london" || user_input2 === "London"){
                flight_price = 183;
            }
            else if (user_input2 === "Paris" || user_input2 === "paris"){
                flight_price = 220;
            }
            else {
                flight_price = 300;
            }
        } else {
            console.log("Invalid input or user canceled the prompt. Please enter a valid data.");
        }
    } while (user_input2 === null || !isNaN(user_input2));

    console.log("Total price for the flight: $" + flight_price);
    return flight_price;
}


function rentalCarCost(user_input3){
    let car_price = 0;
    do {
        if (user_input3 !== null && !isNaN(user_input3)) {
            if(user_input3 >= 0 && user_input3 <= 10){
                car_price = user_input3 * 40;
            }
            else if(user_input3 > 10){
                car_price = user_input3 * 40 * 95 / 100;
            } 
        } else {
            console.log("Invalid input or user canceled the prompt. Please enter a valid number.");
        }
    } while (user_input3 === null || isNaN(user_input3));

    console.log("Total price for a car: $" + car_price);
    return car_price;
}


function totalVacationCost(){
    let total_cost = 0;
    hot = prompt("Enter the number of nights you want to stay in the hotel");
    ride = prompt("Enter the destination");
    auto = prompt("Enter the number of days you want to rent a car");
    hotel = hotelCost(hot);
    plane = planeRideCost(ride);
    car = rentalCarCost(auto);
    total_cost = hotel + plane + car;
    console.log("Total cost is: $" + total_cost);
    return total_cost;
}

totalVacationCost();
