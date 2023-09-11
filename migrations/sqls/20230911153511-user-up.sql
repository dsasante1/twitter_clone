/* Replace with your SQL commands */


CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    userName varchar(100)  UNIQUE,
    firstName varchar(100),
    lastName varchar(100),
    email varchar(100),
    password varchar(60),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)