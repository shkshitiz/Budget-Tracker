function renderEditTransaction(transaction) {
  document.querySelector('#page').innerHTML = `
  <main>
  <form onSubmit="editTransaction(event)">
    <h2>
      Edit Transaction
    </h2>
    <input type="hidden" value="${transaction.id}">
    <section>
      <label for="name">Name: </label>
      <input type="text" name="name" value="${transaction.name}">
    </section>
    <section>
      <label for="amount">Amount: </label>
      <input type="text" name="amount" value="${transaction.amount}">
    </section>
    <section>
      <label for="category">Category: </label>
      <input type="text" name="category" value="${transaction.category}">
    </section>
    <section>
      <label for="description">Description: </label>
      <input type="text" name="description" value="${transaction.description}">
    </section>
    <section>
      <label for="period">Period: </label>
      <input type="checkbox" name="period" value="${transaction.period}">
    </section>
    <section>
      <label for="startDate">Start Date: </label>
      <input type="date" name="startDate" value="${transaction.startDate}">
    </section>
    <section>
      <label for="endDate">End Date: </label>
      <input type="date" name="endDate" value="${transaction.endDate}">
    </section>
    <button>Save</button>
    </form>
   </main>
  `
}

function editTransaction(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch(`/api/transactions/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(transaction => {
      renderTransactionHistory()
    })
}