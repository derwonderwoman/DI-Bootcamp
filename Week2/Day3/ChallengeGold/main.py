text = input("Type your message")

my_text = text.split()

cypher_text = []
cypher_word = []

for word in my_text:
    for letter in word:
        cypher_word += chr(ord(letter) + 3)
    cypher_text.append(''.join(cypher_word))
    cypher_word = []

enchr = " ".join(cypher_text)
print(f"Encrypted text is {enchr}")


