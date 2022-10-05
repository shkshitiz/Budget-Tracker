const state = {
  transactions: []
}

fetch('/api/transactions')
.then(res => res.json())
.then(transactions => {
  state.transactions = transactions
})

fetch('/api/sessions')
.then(res => res.json())
.then(userName => {
  if (typeof userName === 'string') {
    state.loggedInUserName = userName
  }
})