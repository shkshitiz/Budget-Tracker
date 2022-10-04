CREATE DATABASE budget_tracker_db;
\c budget_tracker_db
-- \password {username}
-- don't forget to add a password in 

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE trackers(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    period INTEGER,
    name TEXT,
    description TEXT,
    category TEXT
);
