
function renderTransactionHistory() {
    document.querySelector('#page').innerHTML = `
        <div class="transaction-list">
            ${renderTransactionListTitle()}
            ${renderTransactionListHistory()}
        </div>
    `
}
