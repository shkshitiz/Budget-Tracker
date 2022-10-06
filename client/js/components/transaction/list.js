
const colourClassOptions = [
    'item-style-orange',
    'item-style-red',
    'item-style-blue',
    'item-style-brown',
    'item-style-yellow'
]

function renderList(page) {
    let renderBuffer = ''
    switch (page) {
        case 'history':
            renderBuffer = renderTransactionListHistory()
            break;
        case 'manager':
            renderBuffer = renderTransactionListManager()
            break;
        case 'expense':
            renderBuffer = renderTransactionListExpense()
            break;
        default:
            break;
    }


    document.querySelector('#page').innerHTML = `${renderBuffer}`
}

function renderTransactionListTitle() {
    return `
        <div class="transaction-list-title">
            <p class="title-date">DATE</p>
            <p class="title-transaction">Transaction</p>
        </div>
    `
}

function renderTransactionListHistory() {
    // Remote all future transaction data to only see past transaction data
    return `
        <div class="transaction-tracking-items">
            ${historicalTransactionList()}
        </div>
    `
}

function historicalTransactionList() {
    let historicalTransaction = state.userTransactions
        .filter(transaction => {
            let tsTime = new Date(transaction.date)
            let cDTime = state.currentDate
            if (tsTime.getTime() <= cDTime.getTime()) {
                return transaction
            }
        }).map(ts => {
            let date = new Date(ts.date).getDate()
            let month = new Date(ts.date)
                .toLocaleString('en-US', {
                    month: 'short',
                })
            let randColourArrIndex = Math.floor(Math.random() * colourClassOptions.length);
            
            return `
                <div class="tracked-item">
                    <div class="tracked-item-date">${date} ${month}</div>
                    <span class="tracked-item-divider"></span>
                    <div class="tracked-item-info ${colourClassOptions[randColourArrIndex]}">
                        <div class="tracked-item-title">${(ts.amount > 0 ? '+' : '-')} $${Math.abs(ts.amount)} - ${ts.name}</div>
                        <div class="tracked-item-content" hidden>${ts.description}</div>
                    </div>
                </div>
            `
        })
    return historicalTransaction.join('')
}

function renderTransactionListExpenses() {
  let expense = state.userTransactions
        .filter(transaction => {
          return transaction.amount < 0
        })
        .filter(transaction => {
            let tsTime = new Date(transaction.date)
            let cDTime = state.currentDate
            if (tsTime.getTime() >= cDTime.getTime()) {
                return transaction
            }
        }).map(ts => {
            let date = new Date(ts.date).getDate()
            let month = new Date(ts.date)
                .toLocaleString('en-US', {
                    month: 'short',
                })
            let randColourArrIndex = Math.floor(Math.random() * colourClassOptions.length);
            
            return `
                <div class="tracked-item" data-id="${ts.id}">
                    <div class="tracked-item-date">${date} ${month}</div>
                    <span class="tracked-item-divider"></span>
                    <div class="tracked-item-info ${colourClassOptions[randColourArrIndex]}">
                        <div class="tracked-item-title">${(ts.amount > 0 ? '+' : '-')} $${Math.abs(ts.amount)} - ${ts.name}</div>
                        <div class="tracked-item-content" hidden>${ts.description}</div>
                    </div>
                    <div class="edit" onClick="editTransaction(event)">Edit</div>
                    <div class="delete" onClick="deleteTransaction(event)">Delete</div>
                </div>
            `
        })
    return expense
}

function renderTransactionListIncomes() {
  let incomes = state.userTransactions
        .filter(transaction => {
          return transaction.amount > 0
        })
        .filter(transaction => {
            let tsTime = new Date(transaction.date)
            let cDTime = state.currentDate
            if (tsTime.getTime() >= cDTime.getTime()) {
                return transaction
            }
        }).map(ts => {
            let date = new Date(ts.date).getDate()
            let month = new Date(ts.date)
                .toLocaleString('en-US', {
                    month: 'short',
                })
            let randColourArrIndex = Math.floor(Math.random() * colourClassOptions.length);
            
            return `
                <div class="tracked-item">
                    <div class="tracked-item-date">${date} ${month}</div>
                    <span class="tracked-item-divider"></span>
                    <div class="tracked-item-info ${colourClassOptions[randColourArrIndex]}">
                        <div class="tracked-item-title">${(ts.amount > 0 ? '+' : '-')} $${Math.abs(ts.amount)} - ${ts.name}</div>
                        <div class="tracked-item-content" hidden>${ts.description}</div>
                    </div>
                    <div>Edit</div>
                    <div>Delete</div>
                </div>
            `
        })
    return incomes
}

function renderTransactionListManager() {
    // take the data and split it up into "expense" and "income"

    
}

function editTransaction(event) {
  const editBtn = event.target
  const transactionDOM = editBtn.closest('.tracked-item')
  const transactionId = transactionDOM.dataset.id
  console.log(transactionId)


  fetch(`/api/transaction/${transactionId}`, {
    method: 'GET'
  })
}

function deleteTransaction(event) {
  const deleteBtn = event.target
  const transactionDOM = deleteBtn.closest('.tracked-item')
  const transactionId = transactionDOM.dataset.id
  console.log(transactionId)

  fetch(`/api/transactions/${transactionId}`, {
    method: 'DELETE'
  })
    .then (() => {
      state.userTransaction = state.userTransaction.filter(transaction => transaction.id != transactionId)
      renderTransactionManager()
    })
}

// renderEditTransaction(transaction)

let prototypeDatabaseDisplay = `
    <div class="tracked-item">
        <div class="tracked-item-date">5 Oct</div>
        <span class="tracked-item-divider"></span>
        <div class="tracked-item-info item-style-orange">
            <div class="tracked-item-title">- $420 - Unexpected Cost</div>
            <div class="tracked-item-content"></div>
        </div>
    </div>

    <div class="tracked-item">
        <div class="tracked-item-date">1 Oct</div>
        <span class="tracked-item-divider"></span>
        <div class="tracked-item-info item-style-blue">
            <div class="tracked-item-title">+ $60 - Dinner Pay-back</div>
            <div class="tracked-item-content"></div>
        </div>
    </div>

    <div class="tracked-item">
        <div class="tracked-item-date">1 Oct</div>
        <span class="tracked-item-divider"></span>
        <div class="tracked-item-info item-style-brown">
            <div class="tracked-item-title">- $150 - Takeaway</div>
            <div class="tracked-item-content"></div>
        </div>
    </div>

    <div class="tracked-item">
        <div class="tracked-item-date">29 Sep</div>
        <span class="tracked-item-divider"></span>
        <div class="tracked-item-info item-style-yellow">
            <div class="tracked-item-title">+ $1000 - Commission Work</div>
            <div class="tracked-item-content"></div>
        </div>
    </div>

    <div class="tracked-item">
        <div class="tracked-item-date">20 Sep</div>
        <span class="tracked-item-divider"></span>
        <div class="tracked-item-info item-style-red">
            <div class="tracked-item-title">- $300 - Rent</div>
            <div class="tracked-item-content"></div>
        </div>
    </div>

    <div class="tracked-item">
        <div class="tracked-item-date">10 Sep</div>
        <span class="tracked-item-divider"></span>
        <div class="tracked-item-info item-style-brown">
            <div class="tracked-item-title">- $300 - Food Shopping</div>
            <div class="tracked-item-content"></div>
        </div>
    </div>

    <div class="tracked-item">
        <div class="tracked-item-date">1 Sep</div>
        <span class="tracked-item-divider"></span>
        <div class="tracked-item-info item-style-blue">
            <div class="tracked-item-title">+ $1200 - Salary</div>
            <div class="tracked-item-content"></div>
        </div>
    </div>
`