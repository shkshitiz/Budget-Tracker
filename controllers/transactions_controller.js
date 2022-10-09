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

// grab logged in user's transaction data
router.post('/user', (req, res) => {
  const { userEmail } = req.body

  User
    .findByEmail(userEmail)
    .then(user => {
      // console.log(user)
      if (typeof user !== 'undefined') {
        Transaction
          .findAllByUserId(user.id)
          .then(transactions => res.json(transactions))
      } else {
        res.status(404).json({ errorCode: '404', error: 'user not found, unable to access data.' })
      }
  })
})

// create new transaction
router.post('/', (req, res) => {
  const { userEmail, name, date, amount, description } = req.body

  // completely empty, do not even bother doing networking
  if (userEmail == '') {
    res.status(401).json({ error: 'user is not logged in, not allowed to add transactions' })
  } else if (
    name == '' &&
    date == '' &&
    amount == '' &&
    description == ''
  ) {
    res.status(400).json({ error: 'no data inputed, please fill out the form' })
  } else if (name != '' || date != '' || amount != '') {
    // if there are at least some input, check if they are ideal
    if (name == '') {
      res.status(400).json({ error: 'please add a title to the transaction' })
    } else if (amount == '') {
      res.status(400).json({ error: 'please input amount that this transaction will occur' })
    } else if (date == '') {
      res.status(400).json({ error: 'please add a date to the transaction' })
    } else {
      // all data is inputted and the user may safely input data into the database
      User
      .findByEmail(userEmail)
      .then(user => {
        Transaction
          .create(user.id, date, amount, name, description)
          .then(transaction => res.json(transaction))
      })
    }
  } else {
    res.status(400).json({ error: 'please fill in the rest of the form' })
  }
})

// update
router.get('/:id/edit', (req, res) => {
  Transaction
    .find(req.params.id)
    .then(transaction  => res.json(transaction))
})

router.put('/:id', (req, res) => {
  const { name, date, amount, description } = req.body

  // completely empty, do not even bother doing networking
  if (req.params.id == '') {
    res.status(401).json({ error: 'user is not logged in, not allowed to add transactions' })
  } else if (
    name == ''&&
    date == '' &&
    amount == '' &&
    description == ''
  ) {
    res.status(400).json({ error: 'no data inputed, please fill out the form' })
  } else if (
    name != '' ||
    date != '' ||
    amount != ''
  ) {
    // if there are at least some input, check if they are ideal
    if (name == '') {
      res.status(400).json({ error: 'please add a title to the transaction' })
    } else if (amount == '') {
      res.status(400).json({ error: 'please input amount that this transaction will occur' })
    } else if (date == '') {
      res.status(400).json({ error: 'please add a date to the transaction' })
    } else {
      // all data is inputted and the user may safely input data into the database
      Transaction
        .update(req.params.id, date, amount, name, description)
        .then(updatedTransaction => res.json(updatedTransaction))
    }
  } else {
    res.status(400).json({ error: 'incorrect amount of data has been inputted. Please make sure the name/date/amount fields are filled in.' })
  }
})

// delete
router.delete('/:id', (req, res) => {
  Transaction
    .deleteById(req.params.id)
    .then(() => res.json({message: 'deleted successfully'}))
})

module.exports = router
