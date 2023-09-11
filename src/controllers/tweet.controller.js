const TweetService = require('../services/tweet.service');

/**
 * Controller function to add new tweet
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {JSON} - A JSON response containing the tweets detail
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

const fetchSingleTweet = async (req, res, next) => {
    try {
        const { title } = req.body

        const result = await TweetService.retrieveSingleTweet(title);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}


//todo: implement delete and
//update from the database

const updateTweet = async (req, res, next) => {
    try {
        const {title, author} = req.body
        const result = await TweetService.updateATweet(title, author)
        return res.status(result.code).json(result)

    }catch(error){
        next(error)
    }
}


const deleteTweet = async (req, res, next) => {
    try {
        const {title} = req.body
        const result = await TweetService.deleteATweet(title)
        return res.status(result.code).json(result)
    }catch(error){
        next(error)
    }
}

module.exports = {
    createTweet,
    fetchAllTweets,
    fetchSingleTweet,
    updateTweet,
    deleteTweet

}

