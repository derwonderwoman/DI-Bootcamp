-- SELECT name FROM language
-- SELECT film.title, film.description, language.name FROM film INNER JOIN language ON film.language_id = language.language_id
-- SELECT language.name,  film.title, film.description FROM film RIGHT OUTER JOIN language ON film.language_id = language.language_id
-- CREATE TABLE new_table (
-- 	film_id INT PRIMARY KEY, 
-- 	name VARCHAR(50)
-- )
-- INSERT INTO new_table(film_id, name)
-- VALUES(1,'Interstellar'),(2, 'House of Dragons'),(3, 'Game of Thrones')
-- CREATE TABLE customer_review (
-- 	review_id SERIAL PRIMARY KEY, 
-- 	film_id INT NOT NULL,
-- 	language_id INT NOT NULL,
-- 	title VARCHAR(100),
-- 	score INT CHECK (score >= 1 AND score <= 10),
-- 	review_text VARCHAR,
-- 	last_update DATE,
-- 	FOREIGN KEY (film_id) REFERENCES new_table(film_id) ON DELETE CASCADE,
-- 	FOREIGN KEY (language_id) REFERENCES language(language_id)
-- )
-- INSERT INTO customer_review(film_id,language_id, title,score,review_text,last_update)
-- VALUES (1, 1, 'Great Movie', 9, 'This movie was fantastic!', '2024-03-17'),
--     (2, 2, 'Disappointing', 4, 'I expected more from this movie.', '2024-03-17')
-- DELETE FROM new_table WHERE film_id = 1
-- SELECT * FROM customer_review


-- UPDATE film SET language_id = 3 WHERE language_id = 1

-- DROP TABLE customer_review

-- SELECT COUNT(*) FROM rental WHERE return_date is NULL

-- SELECT * FROM film 
-- 	INNER JOIN inventory ON film.film_id = inventory.film_id
-- 	INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- 	WHERE rental.return_date is NULL
-- 	ORDER BY film.replacement_cost DESC LIMIT 30


-- SELECT film.title 
-- FROM film 
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id 
-- INNER JOIN actor ON actor.actor_id = film_actor.actor_id 
-- WHERE 
--     actor.first_name ILIKE 'Penelope' 
--     AND actor.last_name ILIKE 'Monroe' 
--     AND film.description ILIKE '%sumo wrestler%'
	
	
-- SELECT * 
-- FROM film
-- WHERE length < 60 AND rating = 'R'


-- SELECT * 
-- FROM film 
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- INNER JOIN payment ON customer.customer_id = payment.customer_id
-- WHERE customer.first_name ILIKE 'Matthew' AND customer.last_name ILIKE 'Mahan'
-- AND rental.return_date > '2005-07-28' AND rental.return_date < '2005-08-01'
-- AND payment.amount > 4.00


-- SELECT *
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE customer.first_name ILIKE 'Matthew' AND customer.last_name ILIKE 'Mahan'
-- AND film.description ILIKE '%boat%'
-- ORDER BY film.replacement_cost DESC