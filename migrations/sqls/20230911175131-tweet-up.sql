/* Replace with your SQL commands */

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    title varchar(100),
    tweet varchar(100),
    useId INT REFERENCES users(id) ON DELETE CASCADE,
    likes INT,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)