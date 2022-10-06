-- Create database
CREATE DATABASE budget_tracker_db;
\c budget_tracker_db
-- \password {username}
-- don't forget to add a password in 



-- Users table
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password_digest TEXT
);

-- Reset Users table
TRUNCATE TABLE users;
ALTER SEQUENCE users_id_seq RESTART WITH 1;
-- DELETE Users table
DROP TABLE users;



-- Budget Transactions table
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    date TIMESTAMP,
    amount INTEGER,
    name TEXT,
    description TEXT
);

-- Reset Transactions table
TRUNCATE TABLE transactions;
ALTER SEQUENCE transactions_id_seq RESTART WITH 1;
-- DELETE Transactions table
DROP TABLE transactions;



-- Seeding example content
-- Converting "real time" to Timestamp Time/UNIX time
-- now() also is one way to get current time
INSERT INTO transactions (user_id, date, amount, name, description)
VALUES (
    1,
    TO_TIMESTAMP(1664876340),
    100,
    'Deposit Money',
    'this was just some money deposited into my accounts'
);

INSERT INTO transactions (user_id, date, amount, name, description)
VALUES (
    1,
    TO_TIMESTAMP(1675417140),
    1800,
    'Income',
    'getting paid every fortnight until February 2023'
);

-- "-1" for the period means it is monthly at the same date every month, from the start_date
-- extension to use it in "period" in the future as extension, currently it will set it as 28 days for "monthly"
INSERT INTO transactions (user_id, date, amount, name, description)
VALUES (
    1,
    TO_TIMESTAMP(1664621850),
    -20,
    'Subscriptions',
    'monthly subscriptions ending sometime in the future'
);

INSERT INTO transactions (user_id, date, amount, name, description)
VALUES (
    1,
    TO_TIMESTAMP(1664621850),
    -2000,
    'e-bike',
    'trying to get more fit by riding a bike some more this coming summer'
);

INSERT INTO transactions (user_id, date, amount, name, description)
VALUES (
    1,
    TO_TIMESTAMP(1666948620),
    1800,
    'future',
    '#$@^%$%^&^(**_+'
);

-- "-1" for the period means it is monthly at the same date every month, from the start_date
-- extension to use it in "period" in the future as extension, currently it will set it as 28 days for "monthly"
INSERT INTO transactions (user_id, date, amount, name, description)
VALUES (
    1,
    TO_TIMESTAMP(1666257420),
    -20,
    'future debts',
    '3246579879898-09'
);

INSERT INTO transactions (user_id, date, amount, name, description)
VALUES (
    1,
    TO_TIMESTAMP(1665739020),
    -2000,
    'another future',
    'kjvkjhv;b;kn'
    );