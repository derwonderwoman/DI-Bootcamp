-- SELECT * FROM customer
-- SELECT (first_name, last_name) AS full_name FROM customer
-- SELECT DISTINCT create_date FROM customer
-- SELECT * FROM customer ORDER BY first_name DESC
-- SELECT film_id, title, description, release_year,rental_rate FROM film ORDER BY rental_rate ASC
-- SELECT address, phone FROM address WHERE district = 'Texas'
-- SELECT * FROM film WHERE film_id = 15 BETWEEN film_id = 150
-- SELECT film_id,title,description,rental_duration,rental_rate FROM film WHERE title = 'Interstellar'
-- SELECT film_id,title,description,rental_duration,rental_rate FROM film WHERE  title ILIKE 'in%'
-- SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10
-- SELECT * FROM film ORDER BY replacement_cost ASC OFFSET 10 LIMIT 10
-- SELECT * FROM film ORDER BY replacement_cost ASC OFFSET 10 FETCH FIRST 10 ROW ONLY
-- SELECT customer.first_name || ' ' || customer.last_name AS full_name, payment.amount, payment.payment_date  
-- FROM customer
-- INNER JOIN payment ON customer.customer_id = payment.customer_id;
-- SELECT * FROM film INNER JOIN inventory ON inventory.film_id = film.film_id
-- SELECT country.country, city.city FROM country INNER JOIN city ON country.country_id = city.country_id
-- SELECT customer.customer_id, customer.first_name || ' ' || customer.last_name AS full_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment ON customer.customer_id = payment.customer_id ORDER BY staff_id