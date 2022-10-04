const db = require('../db/db')

const Tracker = {
  findAll: () => {
    const sql = `SELECT * FROM trackers ORDER BY id`
    return db
            .query(sql)
            .then(dbRes => dbRes.rows)
  },

  addTracker: (user_id, start_date, end_data, period, amount, name, description, category) => {
    const sql = `INSERT INTO trackers (user_id, start_date, end_data, period, amount, name, description, category)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                 RETURNING *`

    return db
            .query(sql, [user_id, start_date, end_data, period, amount, name, description, category])
            .then(dbRes => dbRes.rows[0])
  },

  updateTracker: (id, user_id, start_date, end_data, period, amount, name, description, category) => {
    const sql = `UPDATE trackers SET user_id=$1, start_date=$2, end_data=$3, period=$4, amount=$5, name=$6, description=$7, category=$8
                 WHERE id = $9
                 RETURNING *`

    return db
            .query(sql, [user_id, start_date, end_data, period, amount, name, description, category, id])
            .then(dbRes => dbRes.rows[0])
  },

  deleteTrackerById: (id) => {
    const sql = `DELETE FROM trackers WHERE id = $1`
    db.query(sql, [id])
  },

  filterTrackerByTime: (start, end) => {
    const sql = `SELECT * FROM trackers WHERE start_date >= $1 AND start_date <= $2 ORDER BY start_date DESC`
    return db
            .query(sql, [start, end])
            .then(dbRes => dbRes.rows)
  },

  filterTrackerByCategory: (category) => {
    const sql = `SELECT * FROM trackers WHERE category = $1 ORDER BY start_date DESC`
    return db
            .query(sql, [category])
            .then(dbRes => dbRes.rows)
  }
}

module.exports = Tracker
