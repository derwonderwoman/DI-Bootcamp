import psycopg2
import config

class MenuItem():
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def run_query(self, query):
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
        

        except psycopg2.Error as e:
            print('Error connecting', e)

        finally:
            if connection:
                cursor.close()
                connection.close()

    def save(self):
        query = f"INSERT INTO menu_items(item_name,item_price) VALUES('{self.name}',{self.price})"
        return self.run_query(query)

    def delete(self):
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}' AND item_price = {self.price}"
        return self.run_query(query)

    def update(self, new_name, new_price):
        query = f"UPDATE menu_items SET item_name = '{new_name}', item_price = {new_price} WHERE item_name = '{self.name}' "
        return self.run_query(query)

item = MenuItem('Burger', 35)
item.save()
# item.delete()
item.update('Veggie Burger', 37)