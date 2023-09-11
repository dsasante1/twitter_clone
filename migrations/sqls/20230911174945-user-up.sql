/* Replace with your SQL commands *//* Replace with your SQL commands */


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name varchar(100)  UNIQUE,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(100),
    password varchar(60),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)