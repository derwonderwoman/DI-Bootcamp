REverseinp= input("Give me a string")

new_list = REverseinp.split()
reversed = []
i = -1
length = len(new_list)
while length  != 0:
    reversed.append(new_list[i])
    reversed.append(" ")
    new_list.remove(new_list[i])
    length -= 1

print("".join(reversed)) 