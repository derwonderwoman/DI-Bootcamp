#exercise 1
my_fav_numbers = set()
my_fav_numbers.add(2)
my_fav_numbers.add(4)
my_fav_numbers.add(6)
my_fav_numbers.add(1)
my_fav_numbers.add(25)
my_fav_numbers.add(16)
friend_fav_numbers = {112, 114, 116, 118, 115}

print(my_fav_numbers)

my_list = list(my_fav_numbers)
del my_list[-1]
my_fav_numbers = set(my_list)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#exercise 2
#it's possible even if firstly we'll convert tulip into a list

#exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

del basket[basket.index("Banana")]
del basket[basket.index("Blueberries")]
print(basket)
basket.insert(-1,"Kiwi")
basket.insert(0,"Apples")
count = basket.count("Apples")
print(f"The number of elements in the list is {count}")
basket.clear()
print(f"The new basket is {basket}")


#exercise 4

float_list = []
number = 1.5
 
while number <= 5.0:
    float_list.append(number)
    number += 0.5

print(float_list)

#exercise 5
numbers = range(1,21)
for number in numbers:
    print(number)

for number in numbers:
    if (number % 2 == 0):
        print(number)


#exercise 6

name = "Kseniia"
user_name = input("Name,please")

while user_name != name:
    user_name = input("Name,please")


#exercise 7
    
fruit = input("Type your faviurite fruit, if you have many, please separate them with a single space!")
fav_fruit = fruit.split()

any_fruit = input("Type any random fruit")

if any_fruit in fav_fruit:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")


#exercise 8

topping = input("Do you want to add a topping? If don't - type Quit")
toppings = []

while topping != "Quit":
    toppings.append(topping)
    topping = input("Do you want to add more? If don't - type Quit")

    
if len(toppings) != 0:
    price = (10 + (len(toppings) * 2.5))
    print(f"You've ordered pizza with {toppings} and the total price is {price}")
else:
    price = 10
    print(f"You've ordered pizza and the total price is {price}")

#exercise 9

teens = ["Yoni", "Dan", "Nata", "Mark", "Sasha"]    
family = input("Who's here today?Write the names and separate with just one space")
family_members = family.split()
price = 0

for member in family_members:
    age = input(f"What's the age of {member}?")
    age = int(age)
    if age < 3:
        price += 0
    elif age > 3 and age < 12:
        price += 10
    elif age > 12:
        price += 15
    else:
        print("Wrong age")

print(f"The total cost is {price}")

for teen in teens[:]:
    teen_age = input(f"What's the age of {teen}?")
    teen_age = int(teen_age)
    if teen_age >= 16 and teen_age <= 21:
        print("You're the lucky one")
    else:
        print("Sorry")
        teens.remove(teen)

print(f"The lucky ones are {teens}")

#exercise 10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []
str = "Pastrami sandwich"

while len(sandwich_orders) != 0:
    if sandwich_orders[0] == str:
        sandwich_orders.remove(str)
    else:
        print(f"I've made your {sandwich_orders[0]}")
        finished_sandwiches.append(sandwich_orders[0])
        sandwich_orders.remove(sandwich_orders[0])

