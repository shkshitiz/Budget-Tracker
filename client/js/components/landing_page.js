
function renderLandingPage() {
  document.querySelector('#page').innerHTML = `
    <div class="center-dialog d-flex align-items-center justify-content-center">
      <div class="card-body">
        <section class='gif'>
          <img src="/images/giphy.gif" alt="">
        </section>
        <section class='main-logo'> 
          <img src="/images/BudgetTracker.png" alt="">
        </section>
        <section class='options'>
          <button onclick="renderLogin()" class="btn btn-outline-primary">Login</button>
          <button onclick="renderSignUp()" class="btn btn-primary">Sign Up</button>
        </section>
      </div>
    </div>
  `
}
