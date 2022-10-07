const state = {
  userTransactions: [],
  loggedInUserEmail: null,
  currentDate: new Date('2022-10-06'),
  loggedInUsername: null
}

fetch('/api/sessions')
.then(res => res.json())
.then(userData => {
  if (typeof userData.email === 'string') {
    state.loggedInUserEmail = userData.email
    state.loggedInUsername = userData.username
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
