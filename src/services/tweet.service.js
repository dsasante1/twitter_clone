const { addTweet, getTweetByTitle, getAllTweets, getSingleTweet, updateTweet, deleteTweet } = require('../queries/tweet');
const { runQuery } = require('../config/database.config');

/**
 * Add new tweet
 */
const addNewTweet = async (body) => {
    const { title, author } = body;

    // Check if tweet already exists
    const tweet = await runQuery(getTweetByTitle, [title])
    console.log(tweet)
    if (tweet.length > 0) {
        throw {
            code: 409,
            status: 'error',
            message: 'Tweet already exist',
            data: null
        }
    }

    const published_at = new Date();
    const result = await runQuery(addTweet, [title, author, published_at])
    return {
        code: 201,
        status: 'success',
        message: 'New tweet added successfully',
        data: result[0]
    }
}

/**
 * Get all books
 */
const retrieveAllTweets = async () => {
    const data = await runQuery(getAllTweets);
    return {
        code: 200,
        status: 'success',
        message: 'Tweets fetched successfully',
        data
    }
}

/**
 * Get Single Tweet
 */
const retrieveSingleTweet = async (title) => {
    const result = await runQuery(getSingleTweet, [title]);

    return {
        code: 200,
        status: 'success',
        message: 'tweet fetched successfully',
        data: result[0]
    }
}





// todo :
//update a tweet
// delete a tweet

const  updateATweet = async (title, author) => {

    // const { title, author } = body;

    //tweet exists
    const tweet = await runQuery(getTweetByTitle, [title])

    if (tweet.length === 0) {
        throw {
            code: 409,
            status: 'error',
            message: 'cannot update tweet. it does not exist',
            data: null
        }
    }

    const result = await runQuery(updateTweet, [title, author]);
    return {
        code: 200,
        status: 'success',
        message: `tweet updated successfully`,
        data: result
    }
}


const deleteATweet = async (title) => {

    // const { title } = body;

    console.log(title)


    const tweet = await runQuery(getTweetByTitle, [title])

    if (tweet.length === 0) {
        throw {
            code: 409,
            status: 'error',
            message: 'cannot delete tweet. it does not exist',
            data: null
        }
    }

    const result = await runQuery(deleteTweet, [title]);
    return {
        code: 200,
        status: 'success',
        message: ` tweet deleted successfully`,
        data: result
    }
}




module.exports = {
    addNewTweet,
    retrieveAllTweets,
    retrieveSingleTweet,
    updateATweet,
    deleteATweet
}

