#exercise 1

my_list = []
number = input("Give me a number")
length = input("Give me a length")
i = 1

while length != 0:
    my_list.append(int(number) * i)
    i += 1
    length = int(length) - 1

print(my_list)

#exercise 2

word = input("Write me a word")
new_list = list(word)
new_word = []

for i in new_list[:]:
    if i in new_word:
        new_list.remove(i)
    else:
        new_word.append(i)

new_word = "".join(new_word)

print(new_word)





