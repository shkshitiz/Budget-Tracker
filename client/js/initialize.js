const state = {
  userTransactions: [],
  loggedInUserEmail: 'a@gmail.com',
  currentDate: new Date('2022-10-06'),
  loggedInUsername: 'a'
}

fetch('/api/sessions')
.then(res => res.json())
.then(email => {
  if (typeof email === 'string') {
    state.loggedInUserEmail = email
  }
})

if (typeof state.loggedInUserEmail === 'string') {
  let data = `{ "userEmail" : "${state.loggedInUserEmail}" }`

  fetch('/api/transactions/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data
  })
    .then(res => res.json())
    .then(transactions => {
      state.userTransactions = transactions
    })
}
