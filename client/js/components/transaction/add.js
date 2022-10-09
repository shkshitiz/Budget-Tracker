function renderTransactionAdd() {
  document.querySelector('#page').innerHTML = `
    <section class='create-transaction'>
      <form onSubmit="createTransaction(event)" class="form-control-sm">
        <h2>Add transaction</h2>
        <input type="hidden" name="userEmail" value="${state.loggedInUserEmail}">

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="nameInput" placeholder="Transaction Title" name="name">
          <label for="nameInput">Name</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="amountInput" placeholder="Transaction Amount" name="amount">
          <label for="amountInput">Amount</label>
        </div>

        <div class="form-floating mb-3">
          <textarea class="form-control" id="descriptionInput" placeholder="Transaction Description" name="description"></textarea>
          <label for="descriptionInput">Description</label>
        </div>

        <!-- <fieldset>
          <label for="">Name: </label>
          <input type="text" name="name" placeholder="Transaction name">
        </fieldset> -->
        
        <!-- <fieldset>
          <label for="">Amount: </label>
          <input type="number" name="amount" placeholder="0">
        </fieldset> -->

        <!-- <fieldset>
          <label for="">Description: </label>
          <input type="text" name="description" placeholder="Transaction Description">
        </fieldset> -->

        <div class="form-floating mb-3">
          <input type="date" class="form-control" id="dateInput" placeholder="10/10/2022" name="date">
          <label for="dateInput">Date</label>
        </div>

        <!-- <fieldset>
          <label for="">Date paid: </label>
          <input type="date" name="date" placeholder="${state.currentDate.toISOString().slice(0, 10)}">
        </fieldset> -->

        <button class="btn btn-primary">Add Transaction</button>
      </form>
    </section>
  `
}

function createTransaction(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/transactions', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        renderError(res.error, '.create-transaction')
      } else {
        state.userTransactions.push(res)
        // now that the data has been added, reload the manager page back in.
        renderTransactionManager()
      }
    })
}
