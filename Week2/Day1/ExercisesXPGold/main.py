#exercise 1
print("Hello world\n" * 4 + "I love python\n" * 4)
#exercise 2
month = int(input("Type the number from 1 to 12"))

if month < 1 or month > 12:
    print("Wrong number")
elif month >= 3 and month <= 5:
    print("It's spring")
elif month >= 6 and month <= 8:
    print("It's summer")
elif month >= 9 and month <= 11:
    print("It's autumn")
else:
    print("It's winter")