const express = require('express');
const TweetController = require('../controllers/tweet.controller')

const router = express.Router();

router.post('/', TweetController.createTweet);
router.get('/', TweetController.fetchAllTweets);
router.get('/gettweet/', TweetController.fetchSingleTweet);
router.put('/updatetweet/', TweetController.updateTweet);
router.delete('/deletetweet/', TweetController.deleteTweet);

module.exports = router


