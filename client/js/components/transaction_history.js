
function renderTransactionHistory() {
    document.querySelector('#page').innerHTML = `
        <div class="transaction-list">
            ${renderTransactionListTitle()}
            ${renderTransactionList(state.transactionHistoryData)}
        </div>
    `
}
