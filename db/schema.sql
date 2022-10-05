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



-- Budget Transactions table
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    period INTEGER,
    amount INTEGER,
    name TEXT,
    description TEXT,
    category TEXT
);

-- Reset Transactions table
TRUNCATE TABLE transactions;
ALTER SEQUENCE transactions_id_seq RESTART WITH 1;




-- Seeding example content
-- Converting "real time" to Timestamp Time/UNIX time
-- now() also is one way to get current time
INSERT INTO transactions (user_id, start_date, end_date, period, amount, name, description, category)
VALUES (
    1,
    TO_TIMESTAMP(1664876340),
    TO_TIMESTAMP(1664876340),
    0,
    100,
    'Deposit Money',
    'this was just some money deposited into my accounts',
    'Miscellaneous'
);

INSERT INTO transactions (user_id, start_date, end_date, period, amount, name, description, category)
VALUES (
    1,
    TO_TIMESTAMP(1675417140),
    TO_TIMESTAMP(1675417140),
    14,
    1800,
    'Income',
    'getting paid every fortnight until February 2023',
    'Income'
);

-- "-1" for the period means it is monthly at the same date every month, from the start_date
-- extension to use it in "period" in the future as extension, currently it will set it as 28 days for "monthly"
INSERT INTO transactions (user_id, start_date, end_date, period, amount, name, description, category)
VALUES (
    1,
    TO_TIMESTAMP(1664621850),
    TO_TIMESTAMP(1751453580),
    28, 
    -20,
    'Subscriptions',
    'monthly subscriptions ending sometime in the future',
    'Entertainment'
);

INSERT INTO transactions (user_id, start_date, end_date, period, amount, name, description, category)
VALUES (
    1,
    TO_TIMESTAMP(1664621850),
    TO_TIMESTAMP(1664621850),
    0,
    -2000,
    'e-bike',
    'trying to get more fit by riding a bike some more this coming summer',
    'Lifestyle'
);
