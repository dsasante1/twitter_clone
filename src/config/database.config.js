const { Pool } = require('pg')
const config = require('./env/index')

const connectionUrl = config.DATABASE_URL
const pool = new Pool({connectionUrl})

(() => {
    pool.query('SELECT NOW()', (err, res) => {
        if (err) console.log('Database Connection Failed!', err);
        if (res) console.log('Connected to PostgresQL Database');
    })
})()

const runQuery = async (query, values = []) => {
    const { rows } = await pool.query(query, values);
    return rows
}

module.exports = { runQuery }