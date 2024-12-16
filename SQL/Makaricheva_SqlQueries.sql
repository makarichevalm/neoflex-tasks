----------------------- Task 1 -----------------------
--1
SELECT airport_code, airport_name, city 
FROM bookings.airports

--2
SELECT DISTINCT fare_conditions 
FROM bookings.seats

--3
SELECT seat_no 
FROM bookings.seats 
WHERE aircraft_code = '763' AND fare_conditions = 'Economy'

--4
SELECT flight_id, scheduled_departure, scheduled_arrival, arrival_airport, status 
FROM bookings.flights
WHERE  departure_airport = 'PEZ' and (status='On Time' or status ='Scheduled')

--5
SELECT airport_code, airport_name, city 
FROM bookings.airports
WHERE city IN ('Москва', 'Санкт-Петербург')

--6
SELECT * FROM bookings.flights
WHERE departure_airport = 'PEZ' AND scheduled_departure BETWEEN '2016-10-01' AND '2016-10-02'

--7
SELECT * FROM bookings.aircrafts
WHERE model LIKE 'Boeing%'

--8
SELECT ticket_no, flight_id, amount
FROM bookings.ticket_flights
WHERE amount < 10000
ORDER BY flight_id ASC, amount DESC

--9
SELECT fare_conditions, SUM(amount)
FROM bookings.ticket_flights
WHERE flight_id = 30625
GROUP BY fare_conditions

--10
SELECT COUNT(seat_no) AS count_seats
FROM bookings.seats
WHERE fare_conditions = 'Business' AND aircraft_code = '733'

--11
SELECT CAST(book_date AS DATE) AS booking_date, SUM(total_amount) AS total
FROM bookings.bookings
WHERE book_date BETWEEN '2016-09-01' AND '2016-09-30'
GROUP BY booking_date
HAVING SUM(total_amount) > 10000000

----------------------- Task 2 -----------------------
-- создание таблицы, не менее 4х колонок разного типа, 1 колонка первичный ключ, одна необнуляймая
CREATE TABLE bookings.air_staff (
  staff_id SERIAL,
  Fio VARCHAR(100)  NOT NULL,
  birth_date DATE   NOT NULL,
  staff_type VARCHAR(30) NOT NULL,
  PRIMARY KEY (staff_id)
);

-- удаление таблицы
DROP TABLE bookings.air_staff;

-- создание индекса
CREATE UNIQUE INDEX idx_staff_id
ON bookings.air_staff (staff_id);

-- удаление индекса
DROP INDEX bookings.idx_staff_id;

-- получение описания структуры таблицы
-- PSQL Tool:
\d bookings.air_staff
-- Query Tool:
SELECT * 
FROM information_schema.COLUMNS
WHERE TABLE_NAME = 'air_staff';

-- вставка значений
INSERT INTO bookings.air_staff (Fio, birth_date, staff_type) VALUES 
('Иванов Иван Иванович', '1989-01-01', 'Пилот'),
('Петрова Мария Сергеевна', '1985-05-15', 'Бортпроводник'),
('Мошкин Евгений Игоревич', '1995-04-15', 'Сотрудник службы безопасности'),
('Сидоров Алексей Петрович', '2000-12-12', 'Механик');

--очистка таблицы
TRUNCATE TABLE bookings.air_staff;

-- выбрать одно из вариантов: добавление/удаление/модификация колонок
ALTER TABLE bookings.air_staff
ADD experience INT;

-- переименование таблицы
ALTER TABLE bookings.air_staff RENAME TO airport_staff;

-- обновление записей
UPDATE bookings.airport_staff
SET experience = 10
WHERE fio = 'Иванов Иван Иванович';

-- удаление записей
DELETE FROM bookings.airport_staff
WHERE fio = 'Петрова Мария Сергеевна';