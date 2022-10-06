const express = require('express')
const router = express.Router()

// models
const Transaction = require('../models/transaction')

// routes
// read
router.get('/user/:id', (req, res) => {
  Transaction
    .findAll(req.params.id)
    .then(transactions => res.json(transactions))
})

// create
router.post('/', (req, res) => {
  const {userId, name, date, category, amount, description} = req.body

  Transaction
    .create(userId, date, amount, name, description, category)
    .then(transaction => res.json(transaction))
})

// update
// router.put('/', (req, res) => {
//   const transactionId = req.params.id
router.get('/:id', (req, res) => {
  const transactionId = req.params.id

  Transaction
    .find(transactionId)
    .then(() => res.json({message: `grabbed ${transactionId}`}))
})

router.put('/:id', (req, res) => {
  const {name, date, category, amount, description} = req.body

  Transaction
    .update(req.params.id, date, amount, name, description, category)

})

// delete
router.delete('/:id', (req, res) => {
  const transactionId = req.params.id

  Transaction
    .delete(transactionId)
    .then(() => res.json({message: 'deleted successfully'}))
})

module.exports = router
