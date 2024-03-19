-- CREATE TABLE students(
--  student_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  birth_date DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Marc','Benichou','02/11/1998');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Yoan','Cohen','03/12/2010');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Lea','Benichou','27/07/1987');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Amelia','Dux','07/04/1996');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('David','Grez','14/06/2003');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Omer','Simpson','03/10/1980')

-- SELECT * FROM students;
-- SELECT first_name, last_name  FROM students;
-- SELECT first_name, last_name  FROM students WHERE student_id % 2 = 0;
-- SELECT first_name, last_name  FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';
-- SELECT first_name, last_name  FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';
-- SELECT first_name, last_name  FROM students WHERE first_name ILIKE '%a%';
-- SELECT first_name, last_name  FROM students WHERE first_name ILIKE 'a%';
-- SELECT first_name, last_name  FROM students WHERE first_name ILIKE '%a';
-- SELECT first_name, last_name  FROM students WHERE first_name LIKE '%a_';
-- SELECT first_name, last_name  FROM students WHERE student_id = 3 AND student_id = 1;
-- SELECT * FROM students WHERE birth_date >= '01/01/2000';

