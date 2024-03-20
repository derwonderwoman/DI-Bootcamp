-- CREATE TABLE customer(
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50),
-- last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE customer_profile(
-- profile_id SERIAL PRIMARY KEY,
-- isLoggedIn BOOLEAN DEFAULT false,
-- customer_id INTEGER NOT NULL,
-- CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
-- )

-- INSERT INTO customer(first_name, last_name)
-- VALUES ('John', 'Doe'),('Jerome', 'Lalu'), ('Lea', 'Rive')

-- INSERT INTO customer_profile (customer_id, isLoggedIn)
-- SELECT customer_id, TRUE
-- FROM customer
-- WHERE customer.first_name = 'John'

-- INSERT INTO customer_profile (customer_id, isLoggedIn)
-- SELECT customer_id, FALSE
-- FROM customer
-- WHERE customer.first_name = 'Jerome'

-- SELECT customer.first_name FROM customer
-- INNER JOIN customer_profile ON customer.customer_id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = TRUE

-- SELECT customer.first_name, customer_profile.IsLoggedIn FROM customer_profile 
-- RIGHT OUTER JOIN customer ON customer.customer_id = customer_profile.customer_id

-- SELECT COUNT(*) FROM customer
-- LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn IS NOT TRUE 


-- CREATE TABLE Book(
-- book_id SERIAL PRIMARY KEY,
-- title VARCHAR(200) NOT NULL,
-- author VARCHAR(100) NOT NULL
--  )

-- INSERT INTO Book (title, author)
-- VALUES('Alice In Wonderland', 'Lewis Carroll'), ('Harry Potter', 'J.K Rowling'),('To kill a mockingbird','Harper Lee')

-- CREATE TABLE Student(
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL UNIQUE,
-- age INT CHECK (age <= 15)
--  )


-- INSERT INTO Student(name, age)
-- VALUES('John', 12), ('Lera', 11), ('Patrick', 10),('Bob', 14)

-- CREATE TABLE Library (
--     book_fk_id INT,
--     student_id INT,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_id),
--     FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
--         ON DELETE CASCADE
--         ON UPDATE CASCADE,
--     FOREIGN KEY (student_id) REFERENCES Student(student_id)
--         ON DELETE CASCADE
--         ON UPDATE CASCADE
-- )

-- INSERT INTO Library (book_fk_id, student_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'John'),
--     '2022-02-15'
-- );
	
-- INSERT INTO Library (book_fk_id, student_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-03-03'
-- );

-- INSERT INTO Library (book_fk_id, student_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'Lera'),
--     '2021-05-23'
-- );

-- INSERT INTO Library (book_fk_id, student_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-08-12'
-- );

-- SELECT * FROM Library

-- SELECT Student.name, Book.title FROM Library
-- INNER JOIN Student ON Library.student_id = Student.student_id
-- INNER JOIN Book ON Library.book_fk_id = Book.book_id

-- SELECT AVG(s.age) AS average_age
-- FROM Library AS l
-- INNER JOIN Student AS s ON l.student_id = s.student_id
-- INNER JOIN Book AS b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice in Wonderland';

-- DELETE FROM Student
-- WHERE student_id = 1;