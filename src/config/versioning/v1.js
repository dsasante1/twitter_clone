const express = require('express');
const api = express.Router()
const users = require('../../routes/user')
const tweets = require('../../routes/tweet')


api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to twitter'
}))


api.use("/users", users)
api.use("/tweets", tweets);


module.exports = api