const express = require('express');
const BookController = require('../controllers/book.controller')

const router = express.Router();

router.post('/', BookController.createBook);
router.get('/', BookController.fetchAllBooks);
router.get('/getbook/', BookController.fetchSingleBook);
router.put('/updatebook/', BookController.updateBook);
router.delete('/deletebook/', BookController.deleteBook);

module.exports = router


