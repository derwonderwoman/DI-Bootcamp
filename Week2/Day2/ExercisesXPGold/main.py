import string
import random

#exercise 1

list1 = [10, 11, 12, 13, 14] 
list2 = [20, 30, 42] 
print("list1 before concatenation:\n" + str(list1))
list1.extend(list2) 
print ("Concatenated list i.e ,list1 after concatenation:\n"+ str(list1)) 


#exercise 2

for i in range(1500,2501):
    if i % 5 == 0 or i % 7 == 0:
        print(i)


#exercise 3
        
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Tell me your name")

if user_name in names:
    print(names.index(user_name))


#exercise 4

numbers = input("Give me 3 numbers with only one space between them")
my_list = numbers.split()
max  = int(numbers[0])
print(max)


for number in numbers:
    if max > int(number):
        max = number

print(f"The greatest number is {max}")

#exercise 5

vowels = 'aeiouAEIOU'
alphabet = string.ascii_lowercase
for i in alphabet:
    if i in vowels:
        print ("Vowels")
    else:
        print("Consonant")

#exercise 6
        
words = list(input("Give me 7 words: ").lower().split())
letter = input("Give me a letter")


for w in words:
    for i,let in enumerate(w):
        flag = False
        if let == letter:
            print (f"First appearence of the letter variable is {i+1} ")
            flag = True
            break
    if not flag:
        print (f"Sorry, there is no letter '{letter}' in the word '{w}'")
    

#exercise 7:
numbers = range(1, 1000001)
min_num = min(numbers)
max_num = max(numbers)
sum = 0
for num in numbers:
    sum += num
print(max_num)
print(min_num)
print (sum)

#exercise 8
numbers = "34,67,55,33,12,98"
print(numbers.split(","))
print(tuple(numbers.split(',')))


#exercise 9
user = input("Give m a number from 1 to 9(including) - ")
rand = random.randint(1,9)
found = False
while found != True:
    if int(user) == int(rand):
        found = True
        print ("Winner")    
    else:
        user = input("Give m a number from 1 to 9(including) - ")
        print("Better luck next time")


