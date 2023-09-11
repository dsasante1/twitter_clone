/* Replace with your SQL commands */

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    title varchar(100),
    tweet_text varchar(100),
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    likes INT,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)