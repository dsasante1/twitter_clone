const BookService = require('../services/book.service');

/**
 * Controller function to add new book
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {JSON} - A JSON response containing the books detail
 */
const createBook = async (req, res, next) => {
    try {
        const result = await BookService.addNewBook(req.body);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

const fetchAllBooks = async (req, res, next) => {
    try {
        const result = await BookService.retrieveAllBooks();
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

const fetchSingleBook = async (req, res, next) => {
    try {
        const { title } = req.body

        const result = await BookService.retrieveSingleBook(title);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}


//todo: implement delete and
//update from the database

const updateBook = async (req, res, next) => {
    try {
        const {title, author} = req.body
        const result = await BookService.updateABook(title, author)
        return res.status(result.code).json(result)

    }catch(error){
        next(error)
    }
}


const deleteBook = async (req, res, next) => {
    try {
        const {title} = req.body
        const result = await BookService.deleteABook(title)
        return res.status(result.code).json(result)
    }catch(error){
        next(error)
    }
}

module.exports = {
    createBook,
    fetchAllBooks,
    fetchSingleBook,
    updateBook,
    deleteBook

}

