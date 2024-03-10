#exercise 1
user_list = input("Write some words and separate them with comma")
user_list = [x for x in user_list.split(",")]
user_list.sort()
print(",".join(user_list))

#exercise 2
user_sentence = input("Type a sentence!")
max_word_number = 0
max_word = ""
count = 0
user_list = [x for x in user_sentence.split(" ")]
for word in user_list:
    for char in word:
        count += 1
    if count > max_word_number:
        max_word_number = count
        max_word = word
    count = 0

print(f"The longest word in the sentence is {max_word}")




