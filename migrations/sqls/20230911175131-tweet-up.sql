/* Replace with your SQL commands */

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    title varchar(100),
    tweet varchar(100) NOT NULL,
    useId INT REFERENCES users(id) ON DELETE CASCADE,
    likes INT DEFAULT 0,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)