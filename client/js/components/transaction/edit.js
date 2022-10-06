function renderTransactionEdit(itemId) {
  fetch(`/api/transactions/${itemId}/edit`)
    .then(res => res.json())
    .then(transaction => {
      let dateToUpdate = new Date(transaction.date)

      document.querySelector('#page').innerHTML = `
        <main>
          <form onSubmit="updateTransaction(event)">
            <h2>Edit Transaction</h2>
            <input type="hidden" value="${transaction.id}">

            <fieldset>
              <label for="name">Name: </label>
              <input type="text" name="name" value="${transaction.name}">
            </fieldset>

            <fieldset>
              <label for="description">Description: </label>
              <input type="text" name="description" value="${transaction.description}">
            </fieldset>

            <fieldset>
              <label for="amount">Amount: </label>
              <input type="text" name="amount" value="${transaction.amount}">
            </fieldset>

            <fieldset>
              <label for="date">Date: </label>
              <input type="date" name="date" value="${dateToUpdate.toISOString().slice(0, 10)}">
            </fieldset>

            <button>Save</button>
          </form>
        </main>
      `
    })
}

function updateTransaction(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch(`/api/transactions/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(updatedTransaction => {
      state.userTransactions
        .map(transaction => {
          if (transaction.id === updatedTransaction.id) {
            return updatedTransaction
          } else {
            return transaction
          }
        })
      renderTransactionManager()
    })
}