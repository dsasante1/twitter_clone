/* Replace with your SQL commands *//* Replace with your SQL commands */


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(100)  UNIQUE,
    firstname varchar(100),
    lastname varchar(100),
    email varchar(100),
    password varchar(60),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)