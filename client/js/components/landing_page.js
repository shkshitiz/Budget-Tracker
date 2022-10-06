
// This determines what a user sees when they first arrive at the page
// Depending on if they are logged in or not
if (typeof state.loggedInUserEmail !== 'string') {
  renderLandingPage()
} else {
  renderTransactionOverview()
}

function renderLandingPage() {
  document.querySelector('#page').innerHTML = `
    <div class="center-dialog d-flex align-items-center justify-content-center">
      <div class="card-body">
        <section class='gif'>
          <img src="https://media3.giphy.com/media/f9qwUQW56qC7BeCfCM/200w.gif" alt="">
        </section>
        <section class='main-logo'> 
          <img src="https://i.imgur.com/1aor9pi.png" alt="">
        </section>
        <section class='options'>
          <button onclick="renderLogin()" class="btn btn-outline-primary">Login</button>
          <button onclick="renderSignUp()" class="btn btn-primary">Sign Up</button>
        </section>
      </div>
    </div>
  `
}
