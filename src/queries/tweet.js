/**
 * Add new tweet
 */
const addTweet = `
    INSERT INTO tweets(
        title,
        author,
        published_at
    ) VALUES ($1,$2,$3) RETURNING id, title, user_id, author, published_at, created_at
`;

const getTweetByTitle = `
        SELECT id, title, author, user_id FROM tweets WHERE title=$1
`;

const getAllTweets = `
        SELECT * FROM tweets
`

const getSingleTweet = `
        SELECT id, title, author, user_id, published_at, created_at
        FROM tweets WHERE title=$1
`



const updateTweet = `
        UPDATE tweets
        SET author=$2
        WHERE title=$1  RETURNING id, title, user_id, author, published_at, created_at


`


const deleteTweet = `
        DELETE FROM tweets WHERE title=$1 RETURNING id, title, user_id, author, published_at, created_at
`




module.exports = {
    addTweet,
    getTweetByTitle,
    getAllTweets,
    getSingleTweet,
    updateTweet,
    deleteTweet

}

