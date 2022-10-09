
function renderTransactionHistory() {
    document.querySelector('#page').innerHTML = `
        <div class="transaction-list">
            <h3>History</h3>
            ${renderTransactionListTitle()}
            ${renderTransactionListHistory()}
        </div>
    `
}
