#exercise 1
print("Hello world \n" * 4)
#exercise 2
print((99^3)*8)
#exercise 3
print(5 < 3)

print(3 == 3)

print(3 == "3")

print("Hello" == "hello")
#exercise 4
computer_brand = "ASUS"
print(f"A have a {computer_brand} computer")
#exercise 5
name = "Kseniia"
age = "32"
shoe_size = "38"
info = f"Hi, my name is {name} and I'm {age} years old. Interesting fact about me: before I gave birth to my children, my shoe size was 36 and now it's {shoe_size}"
print(info)
#exercise 6
a = 20
b = 4
#exercise 7
if(a > b):
    print("Hello World \n")
#exercise 8
name2 = "Kseniia"

user_name = input("What's your name?")

if(name2 == user_name):
    print("Me too")
else:
    print("Such a strange name...")
#exercise 9

height = input("What's your height")
height_sm = int(height) * 2.54

if(height_sm > 145):
    print("You can ride")
else:
    print("Grow some more before riding")
