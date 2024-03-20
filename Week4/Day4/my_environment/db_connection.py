import psycopg2
import config

try:
    connection = psycopg2.connect(
            host = config.HOSTNAME, 
            user = config.USERNAME, 
            password = config.PASSWORD, 
            dbname = config.DATABASE,
            port = config.PORT 
        )
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM actors')

    print(cursor.fetchall())
except psycopg2.Error as e:
    print('Error connecting', e)

finally:
    if connection:
        cursor.close()
        connection.close()