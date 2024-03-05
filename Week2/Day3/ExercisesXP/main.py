#exercise 1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

new_dict = zip(keys,values)

print(dict(new_dict))

#exercise 2

family = input("Please tell the names and ages of each one")
family = family.split()
names = []
ages = []

for i, it in enumerate(family):
    if i % 2 == 0:
        names.append(it)
    else:
        ages.append(it)    

family_dict = dict(zip(names,ages))

price = 0
ind_price = 0
 
for x, y in family_dict.items():
    if int(y) >= 3 and int(y) < 12:
        price += 10
        print(f"{x} has to pay 10$")
    elif int(y) >= 12:
        price += 15
        print(f"{x} has to pay 15$")
    else:
        print(f"{x} doesn't have to pay")

print(f"The total cost is {price}")

#exercise 3

brand = { 
"name": "Zara", 
"creation_date": 1975, 
"creator_name": "Amancio Ortega Gaona", 
"type_of_clothes": ["men", "women", "children", "home"],
"international_competitors": ["Gap", "H&M", "Benetton"],
"number_stores": 7000,
"major_color": 
    {"France": "blue", 
    "Spain": "red", 
    "US":( "pink", "green") }
}

more_on_zara = {
"creation_date": 1975,
"number_stores": 10000
}

brand["number_stores"] = 2

print(f"The customers of Zara are {brand['type_of_clothes'][:-1]}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(f"The last competitor is {brand['international_competitors'][-1]}")

print(f"The major clothes colors are{brand['major_color']["US"]}")

print(f"The number of pairs in dict is {len(brand)}")

print(f"The keys are {brand.keys()}")

brand.update(more_on_zara)

print(f"Number of stores is {brand['number_stores']}")

#exercise 4

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
new_users = []
new_new_users = []
numbers = []
length = len(users)

for i in range(length):
    numbers.append(i)

print(dict(zip(users, numbers)))

print(dict(zip(numbers, users)))

for i in users:
    if "i" in list(i):
        new_users.append(i)

print(dict(zip(new_users, numbers)))

for i in users:
    if i.startswith("M") or i.startswith("P"):
        new_new_users.append(i)

print(dict(zip(new_new_users, numbers)))

users.sort()

print(dict(zip(users, numbers)))

