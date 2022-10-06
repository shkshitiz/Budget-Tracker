const state = {
  userTransactions: [],
  loggedInUserEmail: 'a@gmail.com'
}

fetch('/api/sessions')
.then(res => res.json())
.then(email => {
  if (typeof email === 'string') {
    state.loggedInUserEmail = email
  }
})

if (typeof state.loggedInUserEmail === 'string') {
  console.log("running fetch for API")
  let data = `{ "userEmail" : "${state.loggedInUserEmail}" }`

  fetch('/api/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data
  })
    .then(res => res.json())
    .then(transactions => {
      console.log("test")
      state.userTransactions = transactions
    })
}

