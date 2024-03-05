
number = int(input("Give me a number and I'll check it "))
sum = 1
i = 2
while i * i <= number:
    if number % i == 0:
        sum = sum + i + number/i
    i += 1

if number == 1 or sum == number:
    print("True")
else:
    print("False")