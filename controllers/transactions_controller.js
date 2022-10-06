const express = require('express')
const router = express.Router()

// models
const Transaction = require('../models/transaction')
const User = require('../models/user')

// routes
// read
router.get('/', (req, res) => {
  res.status(401).json({ errorCode: '401', error: 'needs to be logged in to access user data.'})
})

router.post('/user', (req, res) => {

  const { userEmail } = req.body

  User
    .findByEmail(userEmail)
    .then(user => {
      if (typeof user !== 'undefined') {
        Transaction
          .findAllByUserId(user.id)
          .then(transactions => res.json(transactions))
      } else {
        res.status(404).json({ errorCode: '404', error: 'user not found, unable to access data.'})
      }
  })
})

// create
router.post('/', (req, res) => {
  const { userEmail, name, date, amount, description } = req.body

  User
    .findByEmail(userEmail)
    .then(user => {
      Transaction
        .create(user.id, date, amount, name, description)
        .then(transaction => res.json(transaction))
    })
})

// update
router.get('/:id/edit', (req, res) => {
  const transactionId = req.params.id

  Transaction
    .find(transactionId)
    .then(transaction  => res.json(transaction))
})

router.put('/:id', (req, res) => {
  const {name, date, amount, description} = req.body

  Transaction
    .update(req.params.id, date, amount, name, description, category)
    .then(updatedTransaction => res.json(updatedTransaction))
})

// delete
router.delete('/:id', (req, res) => {
  const transactionId = req.params.id

  Transaction
    .deleteById(transactionId)
    .then(() => res.json({message: 'deleted successfully'}))
})

module.exports = router
