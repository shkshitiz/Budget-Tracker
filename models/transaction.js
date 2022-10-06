const db = require('../db/db')

const Transaction = {
  findAllByUserId: (userId) => {
    const sql = `
      SELECT * FROM transactions WHERE user_id = $1
    `
    
    return db
      .query(sql, [userId])
      .then(dbRes => dbRes.rows)
  },

  find: (transactionId) => {
    const sql = `
      SELECT * FROM transactions WHERE id = $1
    `

    return db
      .query(sql, [transactionId])
      .then(dbRes => dbRes.rows[0])
  },

  create: (userId, date, amount, name, description) => {
    const sql = `
      INSERT INTO transactions (user_id, date, amount, name, description)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `

    return db
            .query(sql, [userId, date, amount, name, description])
            .then(dbRes => dbRes.rows[0])
  },

  update: (id, date, amount, name, description) => {

    const sql = `
      UPDATE transactions
      SET
        date = $2, amount = $3, name = $4, description = $5
      WHERE
        id = $1
      RETURNING *
    `

    console.log("Transaction has been updated")
    return db
            .query(sql, [id, date, amount, name, description])
            .then(dbRes => dbRes.rows[0])
  },

  deleteById: (id) => {
    const sql = `
      DELETE FROM
        transactions
      WHERE
        id = $1
    `

    db.query(sql, [id])

    console.log("Transaction has been deleted")
    return { "message": "Transaction has been deleted" }
  },

  findCurrentMonthByUserId: (date, userId) => {
    const sql = `
      SELECT *
      FROM transactions
      WHERE
        user_id = $1,
        date >= $2
        AND
        date <= $3
      ORDER BY
        date
      DESC
    `
    
    const trunDate = date.slice(0, 10)
    let startOfMonth = new Date(trunDate.slice(0, 4), trunDate.slice(5, 7)-1, 2)
    let endOfMonth = new Date(trunDate.slice(0, 4), trunDate.slice(5, 7), 1)

    return db
            .query(sql, [userId, startOfMonth, endOfMonth])
            .then(dbRes => dbRes.rows)
  }
}

module.exports = Transaction
