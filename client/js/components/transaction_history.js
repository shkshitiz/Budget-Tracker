
function renderTransactionHistory() {
    document.querySelector('#page').innerHTML = `
        <div class="transaction-list">
            ${renderTransactionListTitle()}
            ${renderTransactionListHistory(state.transactionHistoryData)}
        </div>
    `
}
