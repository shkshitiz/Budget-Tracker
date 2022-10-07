const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

router.get('/', (req, res) => {
  if (req.session.userId) {
    console.log("Grabbing user data")
    User
      .findById(req.session.userId)
      .then(userData => {
        console.log("found user data")
        console.log(userData)
        delete userData.password_digest
        res.json(userData)
      })
  } else {
    res.json({ error: 'no one logged in' })
  }
})

router.post('/', (req, res) => {
  const {email, password} = req.body

  User
    .findByEmail(email)
    .then(user => {
      if (email == "" || password == "") {
        res.status(400).json({ error: 'email and/or password cannot be blank'})
      } else {
        console.log("user data?")
        console.log(user)
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)
        if (user && isValidPassword) {
          // log the user in
          req.session.userId = user.id
          res.json(user)
        } else {
          res.status(403).json({ error: 'email and/or password are incorrect'})
        }
      }
    })
})

// log out
router.delete('/', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(503).json({ error:'Unable to log out' })
      } else {
        res.json({ message: 'Logout successful' })
      }
    });
  } else {
    res.end()
  }
})

module.exports = router