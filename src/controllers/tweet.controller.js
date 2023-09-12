const TweetService = require('../services/tweet.service');

/*
 * Controller function to add new tweet
 */
const createTweet = async (req, res, next) => {
    try {
        const result = await TweetService.addNewTweet(req.body);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

const fetchAllTweets = async (req, res, next) => {
    try {
        const result = await TweetService.retrieveAllTweets();
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

const getUserTweets = async (req, res, next) => {
    try {
        const { useId } = req.body

        const result = await TweetService.retrieveSingleTweet(useId);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}


//todo: implement delete and
//update from the database

const updateTweet = async (req, res, next) => {
    try {
        const { tweet, id } = req.body
        const result = await TweetService.updateATweet(tweet, id)
        return res.status(result.code).json(result)

    }catch(error){
        next(error)
    }
}


const deleteTweet = async (req, res, next) => {
    try {
        const { id } = req.body
        const result = await TweetService.deleteATweet(id)
        return res.status(result.code).json(result)
    }catch(error){
        next(error)
    }
}

module.exports = {
    createTweet,
    fetchAllTweets,
    getUserTweets,
    updateTweet,
    deleteTweet

}

