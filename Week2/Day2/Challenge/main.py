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

word = input("Write me a word ")
new_word = []
i = 0

while i < len(word):
    if i == len(word) - 1 or word[i] != word[i+1]:
        new_word.append(word[i])
    i += 1

new_word = "".join(new_word)

print(new_word)



