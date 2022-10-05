function renderAddTransaction() {
  document.querySelector('#page').innerHTML = `
    <section class='create-transaction'>
      <form onSubmit="createTransaction(event)">
        <h2>Add transaction</h2>
        <fieldset>
          <label for="">Name: </label>
          <input type="text" name="name">
        </fieldset>
        
        <fieldset>
          <label for="">Amount: </label>
          <input type="number" name="amount" value="0">
        </fieldset>

        <fieldset>
          <label for="">Category: </label>
          <input type="text" name="category">
        </fieldset>

        <fieldset>
          <label for="">Description: </label>
          <input type="text" name="description">
        </fieldset>

        <fieldset>
          <label for="">Period: </label>
          <input type="text" name="period">
        </fieldset>

        <fieldset>
          <label for="">Start Date: </label>
          <input type="date" name="startDate">
        </fieldset>

        <fieldset>
          <label for="">End Date: </label>
          <input type="date" name="endDate">
        </fieldset>

        <button>Add Transaction</button>
      </form>
    </section>
  `
}

function createTransaction(event) {
  event.preventDefault()
  const form = event.target

  // takes data from the form html tag and converts it into an object literal.
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/transactions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  })
      .then(res => res.json())
      .then(transaction => {
          state.transactions.push(transaction)
          renderTransactionHistory()
      })
}

// function test(event) {
//   event.preventDefault()
//   const form = event.target

//   // takes data from the form html tag and converts it into an object literal.
//   const data = Object.fromEntries(new FormData(form))
//   console.log(JSON.stringify(data))
// }
