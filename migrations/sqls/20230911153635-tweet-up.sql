/* Replace with your SQL commands */

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    title varchar(100),
    text varchar(100),
    FOREIGN KEY(userid) REFERENCES users(id),
    likes int,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)