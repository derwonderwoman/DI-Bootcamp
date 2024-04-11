import psycopg2
import requests
import random
import config
import json

def fetchInfo():
    try:
        response = requests.get("https://restcountries.com/v3.1/all")
        response.raise_for_status()  # Raise an exception for any HTTP errors
        return response.json()
    except requests.exceptions.RequestException as e:
        print("Error fetching countries data:", e)
        return None
    
def select(countries):
    data = random.sample(countries, 10)
    try:
        connection = psycopg2.connect(
            host = config.HOSTNAME, 
            user = config.USERNAME, 
            password = config.PASSWORD, 
            dbname = config.DATABASE,
            port = config.PORT 
        )

        cursor = connection.cursor()
        
        for country in data:
            name = country.get('name', {}).get('common', '')
            capital = country.get('capital', [''])
            flags = country.get('flag', [None])
            subregion = country.get('subregion', [''])
            population = country.get('population', 0)
            cursor.execute(
                "INSERT INTO countries (name, capital,flags, subregion,population) VALUES (%s, %s, %s, %s, %s)",
                (name, capital, flags, subregion, population)
        )

        

        # Commit the transaction and close the cursor and connection
        connection.commit()
        cursor.close()
        connection.close()

        print("Data inserted into the database successfully!")
    except psycopg2.Error as e:
        print('Error connecting', e)   


countries_data = fetchInfo()
select(countries_data)