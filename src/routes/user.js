const express = require('express');
const router = express.Router()
const { createUser, signInUser, fetchAllUsers, getUserWithId } = require('../controllers/user.controller')

router.post('/signup', createUser);
router.post('/login', signInUser);
router.get('/allusers', fetchAllUsers);
router.get('/user', getUserWithId);


module.exports = router;