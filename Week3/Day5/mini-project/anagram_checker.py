from nltk.corpus import words
import os

english_words = words.words()


class AnagramChecker():
    def __init__(self, file):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(dir_path, file)
        with open(file_path, "r") as obj_file:
            words_list = obj_file.readlines()
            self.text = [word.strip('\n') for word in words_list]

    def is_valid_word(word):
        word = word.strip()
        if word in english_words:
            print("This is a valid English word")
            return True
        else:
            raise ValueError("This is not a valid English word")

    @staticmethod
    def letters_in_word(word1,word2):
        set1 = set(word1.lower())
        set2 = set(word2.lower())

        return set1.issubset(set2)
    
    def length(self,word):
        same_length = []
        word_length = len(word)
        for dic_word in self.text:
            if len(dic_word) == word_length:
                same_length.append(dic_word.lower())
        return same_length

        
    def get_anagrams(self,word):
        anagrams = []
        my_list = self.length(word)
        for list_word in my_list:
            if AnagramChecker.letters_in_word(word,list_word) == True:
                anagrams.append(list_word)
        return anagrams

word = AnagramChecker("./sowpods.txt")
print(word.get_anagrams("meat"))
print(AnagramChecker.letters_in_word("meat","dog"))
