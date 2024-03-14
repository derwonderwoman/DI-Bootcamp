from anagram_checker import AnagramChecker

def main():
    file = AnagramChecker("./sowpods.txt")
    word = input("Give me 1 word - ")
    AnagramChecker.is_valid_word(word)
    list = file.get_anagrams(word)
    print(f"Here are your anagrams: {list}")
    
main()
