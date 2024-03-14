import os

class Text():
    def __init__(self,text):
        self.text = text
    
    def find_freq(self,the_word):
        return self.text.lower().split().count(the_word.lower())
    
    def find_the_most(self):
        words = self.text.lower().split()
        word_count = {word: words.count(word) for word in set(words)}
        return max(word_count, key=word_count.get)
    
    def uniq_word(self):
        words = self.text.lower().split()
        return [word for word in set(words) if words.count(word) == 1]
    
    @classmethod
    def from_file(cls, file):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(dir_path, file)
        with open(file_path, "r") as obj_file:
            text = obj_file.read()
        return cls(text)


            
text = Text("A good book would sometimes cost as much as a good house.")
big_text = Text.from_file("the_stranger.txt")
print(text.find_freq("good"))
print(text.find_the_most())
print(text.uniq_word())
print(big_text.find_freq("the"))
print(big_text.find_the_most())
print(big_text.uniq_word()) 



    
    
    
    
    
    
    
   
