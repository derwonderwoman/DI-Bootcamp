#exercise 1

word = input("Give me a word")

length = len(word)
new_list = list(word)
numbers = []
new_dict = {}

for i in range(length):
    numbers.append(i)

for i, item in enumerate(word):
    if item not in new_dict:
        new_dict[item] = [i]
    else:
        new_dict[item].append(i)

print(new_dict)

#exercise 2

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2",  
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = input("How much money do you have?")
products = []
prices = []
my_products = []

def remove_dollar(s):
    return float(s.strip().replace('$','').replace(',',''))

for x,y in items_purchase.items():
    products.append(x)
    prices.append(remove_dollar(y))

new_items_purchase = dict(zip(products,prices))

wallet = remove_dollar(wallet)

for item, i in new_items_purchase.items():
    if wallet > float(i):
        my_products.append(item)
        wallet -= float(i)

if len(my_products) == 0:
    print("Nothing")
else:
    my_products.sort()
    print(my_products)