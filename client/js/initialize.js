const state = {
  transactions: []
}

fetch('/api/sessions')
.then(res => res.json())
.then(userName => {
  if (typeof userName === 'string') {
    state.loggedInUserName = userName
  }
})

if (typeof state.loggedInUserName === 'string') {
  fetch('/api/transactions')
    .then(res => res.json())
    .then(transactions => {
      state.transactions = transactions
    })
}
