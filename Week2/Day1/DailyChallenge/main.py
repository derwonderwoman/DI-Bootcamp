import random

string = input("Gimme a string,buddy!")
string_length = len(string)
empty_string = ""

if(string_length < 10):
    print("String isn't long enough")
elif(string_length > 10):
    print("String is too long")
else:
    print("Perfect string")
    print("The first letter is {}, and the last letter is {}".format(string[0],string[-1]))
    for x in string:
        empty_string +=x
        print(empty_string)
         
    new_list = list(string)
    random.shuffle(new_list)
    print("".join(new_list))


    
