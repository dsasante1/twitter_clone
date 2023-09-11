/* Replace with your SQL commands *//* Replace with your SQL commands */


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(100)  UNIQUE NOT NULL,
    firstname varchar(100) NOT NULL,
    lastname varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    password varchar(60) NOT NULL,
    loggedIn BOOLEAN DEFAULT FALSE,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)