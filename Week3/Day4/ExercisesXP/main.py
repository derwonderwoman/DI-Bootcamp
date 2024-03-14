#exercise 1
import json
import os
import random
dir_path = os.path.dirname(os.path.realpath(__file__))

def get_words_from_file():
    my_list = []
    with open(dir_path + './assets/sowpods.txt', 'r+') as file_obj:
        for word in file_obj:
            my_list.append(word)
    return my_list

def get_random_sentence(length):
    count = 0
    sentence = []
    my_list = get_words_from_file()
    while count != length:
        word = random.choice(my_list)
        word = word.strip("\n")
        sentence.append(word +" ")
        count += 1
    print("".join(sentence).lower())

def main():
    print("This program is producing randomly the sentence from the list with the number of words, providing by user's choice")
    number = int(input("Tell the program- how many words in the sentence your heart is desiring. Choose from 2 up to 20 words - "))

    if number >=2 and number <= 20:
        get_random_sentence(number)
    else: raise ValueError ("Wrong!!! I've told you - from 2 to 20")


main()

exercise 2

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
json_data = json.loads(sampleJson)
print(json_data["company"]["employee"]["payable"]["salary"])

json_data["company"]["employee"].update({"birthday_date": "03.03.2003"})
print(json_data)
json_file = "my_file.json"

with open(json_file, "w+") as file_obj:
    json.dump(json_data, file_obj) 

    