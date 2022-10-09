const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
router.post('/', (req, res) => {
  const { username, email, password } = req.body
  
  if (username == '' || email == '' || password == '') {
    res.status(400).json({ error: 'email, username and/or password cannot be blank'})
  } else if (email == '') {
    res.status(400).json({ error: `email is not in the correct format` })
  } else if (password == '') {
    res.status(400).json({ error: `please enter a password` })
  } else {
    User
    .findByEmail(email)
    .then(user => {
      if (typeof user === 'undefined') {
        const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
        User
          .create(username, email, passwordDigest)
          .then(username => res.json(username))
      } else {
        res.status(401).json({ error: 'email already exists' })
      }
    })
  }
})

module.exports = router 
