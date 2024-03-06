import random

#exercise 1

def display_message(s):
    print(s)

display_message("I'm learning Python")

#exercise 2

def favourite_book(title):
    print(f"One of my favourite books is {title}")

favourite_book("1984")

#exercise 3

def describe_city(city, country = "Russia"):
    print(f"{city} is in {country}")

describe_city("Izhevsk")

#exercise 4

def randomize(user_number):
    '''accepts a number between 1 and 100, generates another number randomly and compare them'''
    number = random.randint(1,100)
    if number == user_number:
        print("Success")
    else:
        print(f"Fail! your number is {user_number} and computer number is {number}")

randomize(23)


#exercise 5

def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt("M", "I love you")

def make_shirt1(size = "L", text = "I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt1()
make_shirt1(size="M")
make_shirt1("S","Bla")
make_shirt1(size="S", text="Bla")

#exercise 5

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(my_list):
    for i in my_list:
        print(i)

show_magicians(magician_names)

def make_great():
    for i, item in enumerate(magician_names):
        magician_names[i] = item + " the Great"

make_great()

show_magicians(magician_names)

#exercise 7

def get_random_temp(number):
    if number == 12 or number in range(1,3):
        return random.uniform(-10.0,15.0)
    elif number in range(9,12):
        return random.uniform(0,20.0)
    elif number in range(3,6):
        return random.uniform(15.0,30.0)
    elif number in range(6,9):
        return random.uniform(25.0,40.0)

def main():
    user_season = int(input("What's the number of the month?"))
    temp = get_random_temp(user_season)
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp >= 0 and temp < 16.0:
        print("Quite chilly! Don’t forget your coat")
    elif temp >=16.0 and temp <= 23.0:
        print("Perfect!")
    elif temp >=24.0 and temp < 32.0:
        print("Still not bad")
    else:
        print("Extremely hot")

main()

#exercise 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
answers = []
user_answers = []
wrong_answers = []
right_answers = []
wrong_questionnes = []

def quizz():
    for dic in data:
        for key,value in dic.items():
            if key == "question":
                print(f"{value}")
                answer = input("Your answer please - ")
                user_answers.append(answer)
            elif key == "answer":
                answers.append(value)
    for index,ans in enumerate(user_answers):
        if ans == answers[index]:
            right_answers.append(ans)
        else:
            wrong_questionnes.append(index)
            wrong_answers.append(ans)
quizz()

number_of_wrong = len(wrong_answers)
number_of_right = len(right_answers)

def inform():
    print(f"The number of right answers is {number_of_right}")
    print(f"The number of wrong answers is {number_of_wrong}") 
    print(f"Here is the list of wrong answers{wrong_answers}")
    print(f"Here is the list of answers{answers}")
    for iter,a in enumerate(wrong_questionnes):
        print(f"You've answered the question - {data[a]["question"]} like this - {wrong_answers[iter]}, this is wrong! The right answer is - {answers[a]}")
    if number_of_wrong > 3:
        print("Play one more time")
        quizz()
    else:
        print("Good job!")


inform()