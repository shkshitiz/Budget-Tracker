const db = require('../db/db')

const Transaction = {
  findAll: (userId) => {
    const sql = `SELECT * FROM transactions WHERE user_id = $1 ORDER BY id`
    return db
            .query(sql, [userId])
            .then(dbRes => dbRes.rows)
  },

  find: (id) => {
    const sql = `SELECT * FROM transactions WHERE id = $1 ORDER BY id`
    return db
            .query(sql, [id])
            .then(dbRes => dbRes.rows[0])
  },

  create: (userId, date, amount, name, description, category) => {
    const sql = `INSERT INTO transactions (user_id, date, amount, name, description, category)
                 VALUES ($1, $2, $3, $4, $5, $6)
                 RETURNING *`

    return db
            .query(sql, [userId, date, amount, name, description, category])
            .then(dbRes => dbRes.rows[0])
  },

  update: (id, date, amount, name, description, category) => {
    const sql = `UPDATE transactions SET date=$1, amount=$2, name=$3, description=$4, category=$5
                 WHERE id=$6
                 RETURNING *`

    return db
            .query(sql, [date, amount, name, description, category, id])
            .then(dbRes => dbRes.rows[0])
  },

  delete: (id) => {
    const sql = `DELETE FROM transactions WHERE id = $1`
    db.query(sql, [id])
  },

  filterByTime: (start, end) => {
    const sql = `SELECT * FROM transactions WHERE date >= $1 AND date <= $2 ORDER BY date DESC`
    return db
            .query(sql, [start, end])
            .then(dbRes => dbRes.rows)
  },

  filterByCategory: (category) => {
    const sql = `SELECT * FROM transactions WHERE category = $1 ORDER BY date DESC`
    return db
            .query(sql, [category])
            .then(dbRes => dbRes.rows)
  }
}

module.exports = Transaction
