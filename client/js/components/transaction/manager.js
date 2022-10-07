function renderTransactionManager() {
  document.querySelector('#page').innerHTML = `
      <div class="future-expenses">
        <h3>Expenses  <span class="material-symbols-outlined add" onClick="renderTransactionAdd()">Add</span></h3>
        ${renderTransactionListTitle()}
        ${renderTransactionListExpenses()}
      </div>

      <div class="future-incomes">
        <h3>Income  <span class="material-symbols-outlined add" onClick="renderTransactionAdd()">Add</span></h3>
        ${renderTransactionListTitle()}
        ${renderTransactionListIncomes()}
      </div>
  `
}