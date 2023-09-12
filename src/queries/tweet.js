/**
 * Add new tweet
 */
const addTweet = `
    INSERT INTO tweets(
        title,
        tweet,
        useId
    ) VALUES ($1,$2,$3) RETURNING id, title, useId, tweet,  created_at
`;



const getTweetByUserId = `
        SELECT id, title, tweet, useId FROM tweets WHERE useId=$1
`;


//who made that tweet
const msgTweeter  = `SELECT useId FROM tweets WHERE id=$1`




const getTweetById = `
        SELECT id, title, tweet, useId FROM tweets WHERE id=$1
`;


const getAllTweets = `
        SELECT tweet, useId,  created_at FROM tweets
`

const getSingleTweet = `
        SELECT id, title, tweet, useId,  created_at
        FROM tweets WHERE useId=$1
`



const updateTweet = `
        UPDATE tweets
        SET tweet=$2
        WHERE id=$1  RETURNING id, title, useId, tweet,  created_at


`


const deleteTweet = `
        DELETE * FROM tweets WHERE id=$1
`

const loginStatus = `
        SELECT loggedIn FROM users WHERE id=$1
`


module.exports = {
    addTweet,
    getTweetByUserId,
    getAllTweets,
    getSingleTweet,
    updateTweet,
    deleteTweet,
    getTweetById,
    getTweetByUserId,
    loginStatus,
    msgTweeter   

}

