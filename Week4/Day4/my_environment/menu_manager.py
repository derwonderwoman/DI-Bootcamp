import psycopg2
import config

class MenuManager:

    @staticmethod
    def run_query(query):
        try:
            connection = psycopg2.connect(
                host=config.HOSTNAME,
                user=config.USERNAME,
                password=config.PASSWORD,
                dbname=config.DATABASE,
                port=config.PORT
            )
            cursor = connection.cursor()
            cursor.execute(query)
            connection.commit()
            result = cursor.fetchall()
            return result

        except psycopg2.Error as e:
            print('Error connecting', e)

        finally:
            if connection:
                cursor.close()
                connection.close()

    @classmethod
    def get_by_name(cls,name):
        query = f"SELECT * FROM menu_items WHERE item_name = '{name}'"
        return cls.run_query(query)
    
    @classmethod
    def all(cls):
        query = f"SELECT * FROM menu_items"
        print (cls.run_query(query))

