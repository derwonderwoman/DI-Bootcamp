string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

new_list = string.split(",")
number = len(new_list)

print(f"{number} companies are in the list")
new_list.reverse()
print(f"Here is the companies {new_list}")

countO = 0
countNotI = 0

for i in new_list:
    if "o" in i:
        countO += 1
    if "i" not in i:
        countNotI += 1

print(f"The quantity of companies with 'o' inside is {countO}, the quantity of companies without 'i' is {countNotI}")

bonus_list = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

bonus_set_list = list(set(bonus_list))

quantity = len(bonus_set_list)

print(', '.join(bonus_set_list))
print(f"And now it's {quantity}")

bonus_set_list.sort()

def reverseWord(word):
    return word[::-1]

newlist = [reverseWord(word) for word in bonus_set_list]

print(f"{newlist}")


