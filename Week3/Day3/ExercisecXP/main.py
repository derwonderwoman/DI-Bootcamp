#exercise 1
import string
import random
from datetime import date, datetime
from faker import Faker

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self) -> str:
        if self.amount > 1:
            return (f"{self.amount} {self.currency}s")
        else: 
            return (self.amount,self.currency)

    def __int__(self) -> int:
        return self.amount

    def __repr__(self) -> object:
        if self.amount > 1:
            return f"{self.__class__.__name__} : {self.amount} {self.currency}s"
        else:
            return f"{self.__class__.__name__} : {self.amount} {self.currency}"


    def __add__(self,other) -> object:
        if isinstance(other,Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                raise ValueError("Cannot add different currencies")
        elif isinstance(other,(int,float)):
            return self.amount + other
        
    def __iadd__(self,other) -> object:
        if isinstance(other,Currency):
            if self.currency == other.currency:
                self.amount += other.amount
                return self
            else:
                raise ValueError("Cannot add different currencies")
        elif isinstance(other,(int,float)):
            self.amount += other
            return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c2))
print(repr(c3))
print(c2 + 3)
print(c1 + c2)
print(c2)
c1 += 5
print(c1)
c1 += c2
print(c1)

#exercise 3
S = 5
text = ''.join(random.choices(string.ascii_letters, k = S))    
print("The randomly generated string is : " + str(text)) # print the random data  

#exercise 4

today = date.today()
print("Today's date:", today)

#exercise 5 

def from_1st_January():
    now = datetime.today()
    then = datetime(2024,1,1)
    diff = now - then

    print(diff)

from_1st_January()

#exercise 6

def Many_Minutes(date):
    date = datetime.strptime(date, "%Y %m %d")
    the_moment = datetime.today()
    
    diff_in_minutes = int((the_moment - date).total_seconds() / 60)

    print(diff_in_minutes)

birthday = input("Enter the birthday (format: YYYY MM DD): ")
Many_Minutes(birthday)

#exercise 7
fake = Faker()
users = []
def generate_fake_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    return user

fake_user = generate_fake_user()
users.append(fake_user)

print(users)
