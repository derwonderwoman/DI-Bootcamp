import random

class Card:
    def __init__(self,suit,value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
       self.cards = []
       self.build()

    def shuffle(self):
        return random.shuffle(self.cards)
        
    def deal(self):
        if len(self.cards) == 0:
            print("No cards left in the deck.")
            return None
        return self.cards.pop()


    def build(self):
        for s in ["Spades", "Hearts", "Clubs", "Diamonds"]:
            for v in ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]:
                self.cards.append(Card(s,v))

print("Dealing a single card from the deck:")
cards = Deck()
cards.shuffle()
card = cards.deal()
print(f"Dealt card: {card.value} of {card.suit}")


