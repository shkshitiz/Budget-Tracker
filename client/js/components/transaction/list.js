
function renderTransactionListTitle() {
    return `
        <div class="transaction-list-title">
            <p class="title-date">DATE</p>
            <p class="title-transaction">Transaction</p>
        </div>
    `
}

/* <p>${transaction.start_date}</p> */
/* <p>${amountSign} $${transaction.amount} - ${transaction.name}</p> */

function renderTransactionListHistory() {
    // Remote all future transaction data to only see past transaction data
    return `
        <div class="transaction-tracking-items">
            ${prototypeDatabaseDisplay}
        </div>
    `
}

function renderTransactionListExpense() {
    
}

function renderTransactionListManager() {
    // take the data and split it up into "expense" and "income"
}

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