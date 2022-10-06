function renderTransactionManager() {
  document.querySelector('#page').innerHTML = `
      <div class="future-expenses">
        <h3>Expenses</h3>
        ${renderTransactionListTitle()}
        ${renderTransactionListExpenses()}
      </div>

      <div class="future-incomes">
        <h3>Income</h3>
        ${renderTransactionListTitle()}
        ${renderTransactionListIncomes()}
      </div>
  `
}