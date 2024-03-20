import menu_item
import menu_manager

def show_user_menu():
    result = input("View an Item (V)\n Add an Item (A)\n Delete an Item (D)\n Update an Item (U)\n Show the Menu (S)\n Exit (Q)")
    if result == 'A':
        add_item_to_menu()
    elif result == 'D':
        remove_item_from_menu()
    elif result == 'U':
        update_item_from_menu()
    elif result == 'S':
        show_restaurant_menu()
    elif result == 'V':
        display_item()
    elif result == "Q":
        exit_function()
    else:
        print("Wrong input")


def add_item_to_menu():
    new_prod = input("What do you want to add to the menu? ")
    new_price = input ("What's the price? ")
    product = menu_item.MenuItem(new_prod, new_price)
    product.save()
    print("Item was added successfully")
    show_user_menu()

def remove_item_from_menu():
    product = input("The name of the item you want to remove from the restaurant’s menu ")
    item = menu_manager.MenuManager.get_by_name(product)
    if item is None:
        print("Item not found in the menu")
        show_user_menu()
    del_pro = menu_item.MenuItem(product, item[1])
    try:
        del_pro.delete()
        print("Item deleted successfully")
    except ValueError as e:
        print("Error deleting item:", e)


def update_item_from_menu():
    old_prod = input("What product do you want to update in the menu? ")
    new_prod = input("What's the new one? ")
    old_price = input ("What was the price? ")
    new_price = input ("What's the new price? ")
    product = menu_item.MenuItem(old_prod, old_price)
    try:
        product.update(new_prod, new_price)
        print("Updated")
    except ValueError:
        print("Silly mistake")

def show_restaurant_menu():
    items =menu_manager.MenuManager.all()
    print (items)

def exit_function():
    show_restaurant_menu()
    exit()

def display_item():
    product = input("The name of the item you want to see ")
    item =menu_manager.MenuManager.get_by_name(product)
    print(item)

show_user_menu()

