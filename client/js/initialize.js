const state = {
  userTransactions: [],
  loggedInUserEmail: null,
  currentDate: new Date(),
  loggedInUsername: null
}

fetch('/api/sessions', {
  method: 'GET'
})
.then(res => res.json())
.then(userData => {
  if (typeof userData.email === 'string') {
    state.loggedInUserEmail = userData.email
    state.loggedInUsername = userData.username
    console.log("logged in, loading session data")

    renderNav()
    renderMobileNavMenu()

    let data = `{ "userEmail" : "${userData.email}" }`

    fetch('/api/transactions/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
    })
      .then(res => res.json())
      .then(transactions => {
        state.userTransactions = transactions
        renderTransactionOverview()
        console.log("logged in, loading user's transaction data")
      })
  }
})