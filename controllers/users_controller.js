const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
router.post('/', (req, res) => {
  const { username, email, password } = req.body

  // invalid input checking

  // username
  // - 1 characters minimum
  // - first character be alphanumeric
  // - if name has not been used before
  // regex source - https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric/389022#389022

  // email
  // - use tried and true regex for emails
  // regex source - https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
  const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

  if (username == '' && password === '' && password == '') {
    res.status(400).json({ error: 'please fill in the sign up form' })
  }

  // if username is not alphanumeric AND also does already exist
  // if (!username[0].match(/^[a-z0-9]+$/i)) {
  else if (username == '') {
    res.status(400).json({ error: 'username needs to start with an alphanumeric character' })
    // User
    //   .findByUsername(username)
    //   .then(user => {
    //     console.log(user)
    //     if ((typeof user) !== 'undefined') {
    //       res.status(400).json({ error: `username is already being used, please pick another username` })
    //     }
    //   })
  }

  // email
  // start with just check if something is there or not..
  // else if (!email.match(emailRegEx)) {
  else if (email == '') {
    res.status(400).json({ error: `email is not in the correct format` })
  }
  
  // password
  else if (password == '') {
    res.status(400).json({ error: `please enter a password` })
  }

  else {
    // using bcypt to create password digest
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

    User
      .create(username, email, passwordDigest)
      .then(username => res.json(username))
  }
})

module.exports = router 