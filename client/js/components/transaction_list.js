
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

function renderTransactionList(transactionData) {
    return `
        <div class="transaction-tracking-items">
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
        </div>
    `
}