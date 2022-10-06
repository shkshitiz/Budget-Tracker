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
  console.log('dfghstest')

  const { userEmail } = req.body
  console.log(`userEmail: ${userEmail}`)

  User
    .findByEmail(userEmail)
    .then(user => {
      console.log(user)
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
  const {userId, name, date, category, amount, description} = req.body

  Transaction
    .create(userId, date, amount, name, description, category)
    .then(transaction => res.json(transaction))
})

// update
// router.put('/', (req, res) => {
//   const transactionId = req.params.id
router.get('/:id/edit', (req, res) => {
  const transactionId = req.params.id

  Transaction
    .find(transactionId)
    .then(transaction  => res.json(transaction))
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
    .deleteById(transactionId)
    .then(() => res.json({message: 'deleted successfully'}))
})

module.exports = router
