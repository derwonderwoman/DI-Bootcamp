#exercise 1, 2, 3

birthdays = {
    "Yoni": "1990/01/01",
    "Mark": "1988/01/01",
    "Kseniia": "1992/02/06"
}

print("Hello")

print(f"Here's my list {birthdays}")

name = input("You can look up the birthdays of the people in the list!")

if name in birthdays.keys():
    print(f"This person was born on {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}")
    date = input("Write his/her birthday in YYYY/MM/DD format and I will add it to my list")
    birthdays[name] = date
    print(f"Now it's in my list {birthdays}")

#exercise 4.1

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

for item, price in items.items():
    print(f"A/An {item} costs {price}.")

#exercise 4.2
    
items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_cost = 0

for i, val in items.items():
    total_cost += float(val["price"]) * float(val["stock"])

print(f"And the final cost is {total_cost}")