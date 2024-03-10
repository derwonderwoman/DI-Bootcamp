#exercise 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Lize", 20)
cat2 = Cat("Tzirilla", 8)
cat3 = Cat("Nyusha",5)

cats = []
cats.append(cat1)
cats.append(cat2)
cats.append(cat3)

def find_the_eldest(my_list):
    max_age = 0
    max_name = ""
    for i in my_list:
        if i.age > max_age:
            max_age = i.age
            max_name = i.name
    print(f"The eldest cat is {max_name}, and it's {max_age} years old.")

find_the_eldest(cats)

#exercise 2

class Dog:
    def __init__(self, dog_name, dog_height):
        print(f"The name of the dog is {dog_name}")
        print(f"The height of the dog is {dog_height}")
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof")

    def jump(self):
        jump_height = int(self.height.replace("cm","")) * 2
        print(f"{self.name} jumps {jump_height}cm high!")

davids_dog = Dog("Rex", "50cm")
sarahs_dog = Dog("Teacup", "20cm")

list_of_dogs = []

list_of_dogs.append(davids_dog)
list_of_dogs.append(sarahs_dog)

davids_dog.bark()
davids_dog.jump()

sarahs_dog.bark()
sarahs_dog.jump()

def find_the_biggest(list_of_dogs):
    max_height = 0
    max_dog_name = ""
    for i in list_of_dogs:
        if int(i.height.replace("cm","")) > max_height:
            max_height = int(i.height.replace("cm",""))
            max_dog_name = i.name
    print(f"The biggest dog is {max_dog_name}, and it's {max_height}cm.")

find_the_biggest(list_of_dogs)

#exercise 3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
        
    def sing_me_a_song(self):
        for i in self.lyrics:
            print("".join(i))

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

#exercise 4

class Zoo:
    def __init__(self,zoo_name):
        self.name  = zoo_name
        self.animals = []

    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        print(f"{self.animals}")
    
    def sell_animal(self,animal):
        if animal in self.animals:
            self.animals.remove(animal)
    
    def sort_animals(self):
       self.animals.sort()

    def group_animals(self):
        first_letters = []
        keys = []
        animals_dict = {}
        for i in self.animals:
            if i[0] not in first_letters:
                first_letters.append(i[0])
        count = len(first_letters)
        for i in range(1, count+1):
            keys.append(i)
        for iter,let in enumerate(first_letters):
            for i in self.animals:
                if i[0] == let:
                    if keys[iter] not in animals_dict:
                        animals_dict[keys[iter]] = [i]
                    else:
                        animals_dict[keys[iter]].append(i)
        for key, value in animals_dict.items():
            if isinstance(value, list) and len(value) == 1:
                animals_dict[key] = value[0]
        
        print(animals_dict)

   

ramat_gan_safari = Zoo("ramat_gan_safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Giraffe")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_animals()
ramat_gan_safari.group_animals()
