#exercise 4
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text))

#exercise 5
length = 0

while(True):
    sentence = input("Print the longest sentence without letter 'a'")
    if(sentence.lower().count("a") == 0):
        if(len(sentence) > length):
            length = len(sentence)
            print("Congratulations!!")
        else:
            print("Try one more time")
    else:
        print("You've got an 'a'")