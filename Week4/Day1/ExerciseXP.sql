-- CREATE TABLE items(
-- item_id SERIAL PRIMARY KEY,
-- item VARCHAR (100) NOT NULL,
-- price SMALLINT NOT NULL
-- );

-- CREATE TABLE customers(
-- person_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (100) NOT NULL
-- )

-- INSERT INTO customers (first_name, last_name)
-- VALUES('Greg', 'Jones');

-- INSERT INTO customers (first_name, last_name)
-- VALUES('Sandra', 'Jones');

-- INSERT INTO customers (first_name, last_name)
-- VALUES('Scott', 'Scott');

-- INSERT INTO customers (first_name, last_name)
-- VALUES('Trevor', 'Green');

-- INSERT INTO customers (first_name, last_name)
-- VALUES('Melanie', 'Johnson')

-- INSERT INTO items (item, price)
-- VALUES('Small desk', '100');

-- INSERT INTO items (item, price)
-- VALUES('Large desk', '300');

-- INSERT INTO items (item, price)
-- VALUES('Fan', '80')

-- SELECT * FROM items;
-- SELECT * FROM customers;
-- SELECT *FROM items WHERE price > 80
-- SELECT *FROM items WHERE price <= 300
-- SELECT * FROM customers WHERE last_name = 'Smith'
-- SELECT * FROM customers WHERE last_name = 'Jones'
-- SELECT * FROM customers WHERE first_name != 'Scott'