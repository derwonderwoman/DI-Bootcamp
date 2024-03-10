class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self,new_animal,quantity = 1):
        if new_animal not in self.animals.keys():
            self.animals[new_animal] = quantity
        else:
            self.animals[new_animal] += quantity
    
    def get_info(self):
        print(f"{self.name}'s farm")
        for k,v in self.animals.items():
            print(k, ":" ,v)

    def get_animal_types(self):
        animals_list = []
        for key in self.animals.keys():
            animals_list.append(key)
        print(animals_list)

    def get_short_info(self):
        new_keys = []
        for k,v in self.animals.items():
            if v > 1:
                new_keys.append(k+"s")

        print(f"{self.name}'s farm has {", ".join(new_keys)}")

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()
macdonald.get_animal_types()
macdonald.get_short_info()