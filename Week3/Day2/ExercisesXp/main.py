#exercise 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
bengal_cat = Bengal("Ben",10)
chartreux_cat = Chartreux("Char",3)
siamese_cat = Siamese("Sia", 5)

    
all_cats = [bengal_cat,chartreux_cat,siamese_cat]

sara_cats = Pets(all_cats)
sara_cats.walk()

#exercise 2

class Dog():
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        print (f'{self.name} is barking')
    
    def run_speed(self):
        speed = self.weight/self.age*10
        return speed
    
    def fight(self,other_dog):
        print (f"{self.name} is fighting with {other_dog.name}")
        if (other_dog.run_speed()*other_dog.weight) > (self.run_speed()*self.weight):
            print (f'{other_dog.name} is the winner')
        elif (other_dog.run_speed()*other_dog.weight) < (self.run_speed()*self.weight):
            print (f'{self.name} is the winner')
        else:
            print ("The dogs are equals")
        
dog1 = Dog("A", 10, 20)
dog2 = Dog("B", 2, 30)    
dog3 = Dog("C", 4, 50)

dog1.bark()
dog1.fight(dog2)
dog2.fight(dog3)

#exercise 4

class Family():
    def __init__(self,members,last_name):
        self.members = members
        self.last_name = last_name

    def born(self,**kwargs):
        self.members.append(kwargs)
        print("Congratulations! New family member was born")

    def is_18(self,the_name):
        for member in self.members: 
                if member["name"] == the_name:
                    return member["age"] >=18
                raise print ("This person is a child")

    def family_presentation(self):
        print(f"The {self.last_name}'s family:")   
        print(f"{self.members}")

    
romanov = Family([{'name':'Michael','age':35,'gender':'Male','is_child':False},{'name':'Sarah','age':32,'gender':'Female','is_child':False}],"Romanov")
petrov = Family([{'name':'Vasja','age':35,'gender':'Male','is_child':False},{'name':'Masha','age':32,'gender':'Female','is_child':False}],"Petrov")

romanov.is_18("Sarah")
petrov.born(name="Eva",age=3,gender="Female",is_child=True)
petrov.is_18("Eva")
romanov.family_presentation()
petrov.family_presentation()

#exercise 5

class TheIncredibles(Family):
    
    def __init__(self,members,last_name = "Incredibles"):
        super().__init__(members,last_name=last_name)

    def use_power(self,name):
        if self.is_18(name) == False:
            raise print (f"Ooops, too small to use his power")
        else:
            print(f"{name} uses his power - {self.members["power"]}")
        
    def incredible_presentation(self):
        print("Here is our powerful family!")
        super().family_presentation()
        
        
incredibles = TheIncredibles([{'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},{'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}])

incredibles.incredible_presentation()
incredibles.born(name="Baby Jack",age=1,gender="Male",is_child=True, power="Unknown Power")
incredibles.incredible_presentation()
incredibles.use_power("Baby Jack")



    

