const UserService = require('../services/user.service');


// Controller create a new user

const createUser = async (req, res, next) => {
    try {
        const response = await UserService.createUser(req.body);
        return res.status(response.code).json(response)
    } catch (error) {
        next(error)
    }
}





// user login

const signInUser = async (req, res, next) => {
    try {

        const result = await UserService.loginUser(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error)
    }
}




const fetchAllUsers = async (req, res, next) => {
    console.log('fetch users')
    try {
        const result = await UserService.fetchUsers();
        
        return res.status(result.code).json(result);
    } catch (error) {
        next(error)
    }
}




const getUserWithId = async (req, res, next) => {
    try {
        const result = await UserService.getUserById(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error)
    }
}



module.exports = {
    createUser,
    signInUser,
    fetchAllUsers,
    getUserWithId

}