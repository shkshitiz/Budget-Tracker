
// This determines what a user sees when they first arrive at the page
// Depending on if they are logged in or not
if (typeof state.loggedInUserEmail !== 'string') {
  renderLandingPage()
} else {
  renderTransactionOverview()
}

function renderLandingPage() {
  document.querySelector('#page').innerHTML = `
    <section class='main-logo'> 
      <h1>BudgetTracker</h1>
    </section>
    <section class='options'>
      <button onclick="renderLogin()">Login</button>
      <button onclick="renderSignUp()">Sign Up</button>
    </section>
  `
}
