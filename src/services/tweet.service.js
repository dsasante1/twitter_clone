const { addTweet, getTweetById, getTweetByUserId, getAllTweets, updateTweet, deleteTweet, loginStatus, msgTweeter } = require('../queries/tweet');
const { runQuery } = require('../config/database.config');





// add a tweet

const addNewTweet = async (body) => {

    const { title, useId, tweet } = body;


    const [{loggedin}]  = await runQuery(loginStatus, [useId])

    if(loggedin == false){
        throw {
            code: 403,
            status: 'error',
            message: 'Log In to tweet',
            data: null
        }
    }

    

    const result = await runQuery(addTweet, [title, tweet, useId])
    return {
        code: 201,
        status: 'success',
        message: 'New tweet added successfully',
        data: result[0]
    }
}




//Get all tweets

const retrieveAllTweets = async () => {
    const data = await runQuery(getAllTweets);
    return {
        code: 200,
        status: 'success',
        message: 'Tweets fetched successfully',
        data: data[0]
    }
}


 //Get  user Tweets
 
const fetchtUserTweets = async (useId) => {

    const result = await runQuery(getTweetByUserId , [useId]);
    
    if (result.length === 0) {
        throw {
            code: 409,
            status: 'error',
            message: 'twitter user has no tweets',
            data: null
        }
    }

    return {
        code: 200,
        status: 'success',
        message: 'tweets fetched successfully',
        data: result[0]
    }
}





// todo :
//update a tweet
// delete a tweet

const  updateATweet = async (newTweet, tweetId) => {
    
    // check if tweet exists by id 
    const fetchedTweets = await runQuery(getTweetById, [tweetId])

    if (fetchedTweets.length === 0) {
        throw {
            code: 409,
            status: 'error',
            message: 'cannot update tweet. it does not exist',
            data: null
        }
    }


    //get the userId from the tweet id
    const [{useid}] = await runQuery(msgTweeter, [tweetId])
    

    // is the user logged in 
    const [{loggedin}]  = await runQuery(loginStatus, [useid])

    if(loggedin == false){
        throw {
            code: 403,
            status: 'error',
            message: 'Log In to update tweet',
            data: null
        }
    }



    const result = await runQuery(updateTweet, [tweetId, newTweet]);
    return {
        code: 200,
        status: 'success',
        message: `tweet updated successfully`,
        data: result[0]
    }
}




const deleteATweet = async (tweetId) => {

       
    // check if tweet exists by id 
    const fetchedTweets = await runQuery(getTweetById, [tweetId])

    if (fetchedTweets.length === 0) {
        throw {
            code: 409,
            status: 'error',
            message: 'cannot delete tweet. it does not exist',
            data: null
        }
    }


    //get the userId from the tweet id
    const [{useid}] = await runQuery(msgTweeter, [tweetId])
    

    // is the user logged in 
    const [{loggedin}]  = await runQuery(loginStatus, [useid])

    //console.log('service login', loggedin)

    if(loggedin == false){
        throw {
            code: 403,
            status: 'error',
            message: 'Log In to delete tweet',
            data: null
        }
    }

    const tweet = await runQuery(getTweetByUserId, [useid])

    if (tweet.length === 0) {
        throw {
            code: 409,
            status: 'error',
            message: 'cannot delete tweet. it does not exist',
            data: null
        }
    }

    const result = await runQuery(deleteTweet, [tweetId]);
    return {
        code: 200,
        status: 'success',
        message: ` Tweet deleted successfully`,
        data: result
    }
}




module.exports = {
    addNewTweet,
    retrieveAllTweets,
    fetchtUserTweets,
    updateATweet,
    deleteATweet
}

