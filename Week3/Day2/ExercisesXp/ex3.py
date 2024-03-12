import random
from main import Dog

class PetDog(Dog):
    def __init__(self,name,age,weight,trained = False):
        super().__init__(name,age,weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(*dogs):
        dog_names = ", ".join([dog.name for dog in dogs])
        print(f"All {dog_names} play together")

    def do_a_trick(self):
        mylist = [f"{self.name} does a barrel roll.”",f"{self.name} stands on his back legs.",f"{self.name} shakes your hand.",f"{self.name} plays dead."]
        if self.trained == True:
            print(random.choice(mylist))
        else:
            print(f"The {self.name} is not trained")

dog1 = PetDog("A",5,20)
dog2 = PetDog("B",4, 50)
dog3 = PetDog("C", 8, 16)

dog1.train()
PetDog.play(dog1,dog2,dog3)
dog1.do_a_trick()
dog2.do_a_trick()

