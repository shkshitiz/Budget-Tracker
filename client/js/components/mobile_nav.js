

function renderMobileNavMenu() {
  if (typeof state.loggedInUserEmail === 'string') {
    document.querySelector('#mobile-nav').classList.add('sticky-nav')
    document.querySelector('#mobile-nav').innerHTML = `
      <div class="container-fluid">
        <div class="col navbar-text sticky-nav-text-box" onclick="renderTransactionOverview()"><div class="sticky-nav-text">Overview</div></div>
        <div class="col navbar-text sticky-nav-text-box" onclick="renderTransactionManager()"><div class="sticky-nav-text">Manager</div></div>
        <div class="col navbar-text sticky-nav-text-box" onclick="renderTransactionHistory()"><div class="sticky-nav-text">History</div></div>
      </div>
    `
  } else {
    if (document.querySelector('#mobile-nav').classList.contains('sticky-nav')) {
      document.querySelector('#mobile-nav').classList.remove('sticky-nav')
    }
  }
}