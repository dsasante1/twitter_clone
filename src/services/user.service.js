const { addUser, findUserByUsername, fetchAllUsers, fetchUserById, changeLogInStatus, defaultLogInStatus, findUserByEmail} = require('../queries/user');
const { runQuery } = require('../config/database.config')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/env/index')



//Create new user

const createUser = async (body) => {
    const { password, username, firstname, lastname, email } = body

    // Check if user already exist in db
    const userExist = await runQuery(findUserByUsername , [username])
    if (userExist.length > 0) {
        throw {
            code: 409,
            message: 'Twitter Username already taken! Kindly select another username.', // suggest new user name based on selected name
            data: null,
            status: 'error'
        }
    }

    // Encrypt password
    const saltRounds = 12;
    const hash = bcrypt.hashSync(password, saltRounds);
    const response = await runQuery(addUser, [username, firstname, lastname, email, hash])

    return {
        code: 201,
        status: 'success',
        message: 'New user added successfully',
        data: response[0]
    }
}




// User login 

const loginUser = async (body) => {
    const { email, password } = body;

    // Check if that user exists inside the db
    const result = await runQuery(findUserByEmail, [email]);
 
    console.log(result)

    if (result.length === 0) {
        throw {
            code: 404,
            status: 'error',
            message: 'User not found',
            data: null
        }
    }
    // Compare user passwords
    const { password: dbPassword, id, username} = result[0];

    const userPassword = bcrypt.compareSync(password, dbPassword); // Boolean true/false
    if (!userPassword) {
        throw {
            code: 400,
            status: 'error',
            message: 'Wrong email and password combination',
            data: null
        }
    }

    const options = {
        'expiresIn': '1d'
    }

    // Generate token for authentication
    const token = jwt.sign({
        id,
        username,
        email,

    }, config.JWT_SECRET_KEY, options);

    console.log(token)

    // if authentication was a sucess change loggedIn status
    if (token){
        runQuery(changeLogInStatus, [id]);

        setTimeout(() => {
            runQuery(defaultLogInStatus, [id])
          }, 9000);
        
        
    }
    return {
        status: 'success',
        message: 'User login successfully',
        code: 200,
        data: {
            id,
            username,
            email,
            token
        }
    }
}





const fetchUsers = async () => {

    const result = await runQuery(fetchAllUsers);

    if(result.length > 0){
        return {
            code: 200,
            status: 'success',
            message: 'Twitter Users fetched successfully',
            data: result
        }
    }
    return {
        code: 400,
        status: 'error',
        message: 'There are no twitter users ',
        data: null
    }
   
}





const getUserById = async (body) => {

    const {id} = body

    const result = await runQuery(fetchUserById, [id])

    if (result.length > 0){
    return {
        code: 200,
        status: 'success',
        message: 'twitter user fetched successfully',
        data: result
        }
    }
    return {
        code: 400,
        status: 'error',
        message: 'There is no twitter user with this id ',
        data: null
    }

}

// const createPost = async (body) => {}










module.exports = {
    createUser,
    loginUser,
    fetchUsers,
    getUserById
}