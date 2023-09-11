
//add new user

const addUser = `
  INSERT INTO users(
    username,
    firstname,
    lastname,
    email,
    password

  )
  VALUES ($1,$2,$3,$4,$5) RETURNING id, username, email, created_at`;




const findUserByUsername = `
 SELECT id, username, email, password FROM users WHERE username=$1
`



const findUserByEmail = `
 SELECT id, username, email, password FROM users WHERE email=$1
`



// * fetch all users - username, firstName and lastName
const fetchAllUsers =  `SELECT username, firstname, lastname FROM users`


// * fetch a single user by id
const fetchUserById =  `SELECT * FROM users WHERE id=$1`


// * create a post (protect route) (logged in user's id)
const createPost = `INSERT INTO tweets (
  title,
  tweet,
  useId,
)VALUES ($1,$2,$3) RETURNING title, tweet, useid;`




module.exports = {
    addUser,
    findUserByUsername,
    fetchAllUsers,
    fetchUserById,
    createPost,
    findUserByEmail

}