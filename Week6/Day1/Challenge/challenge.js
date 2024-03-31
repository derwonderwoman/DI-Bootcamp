let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(element => {
        console.log(element)
    });
};

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    let shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    console.log(shopping); //it's changing because itsn't the primitive type
    console.log(user); //isn't changing because it's primitive type of the variable
}

displayGroceries()
cloneGroceries()
