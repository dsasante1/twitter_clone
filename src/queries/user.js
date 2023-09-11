
//add wew user

const addUser = `
  INSERT INTO users(
    name,
    email,
    password,
    role
  )
  VALUES ($1,$2,$3,$4) RETURNING id, name, email, role, created_at
`;

const findUserByEmail = `
 SELECT id, name, email, role, password FROM users WHERE email=$1
`

module.exports = {
    addUser,
    findUserByEmail
}