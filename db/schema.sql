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
