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

