

function renderMobileNavMenu() {
  if (typeof loggedInUserEmail === 'string') {
    document.querySelector('#mobile-nav').classList.add('sticky-nav')
    document.querySelector('#mobile-nav').innerHTML = `
      <div class="container-fluid">
        <div class="col navbar-text sticky-nav-text" onclick="renderTransactionOverview()">Overview</div>
        <div class="col navbar-text sticky-nav-text" onclick="renderTransactionManager()">Manager</div>
        <div class="col navbar-text sticky-nav-text" onclick="renderTransactionHistory()">History</div>
      </div>
    `
  } else {
    if (document.querySelector('#mobile-nav').classList.contains('sticky-nav')) {
      document.querySelector('#mobile-nav').classList.remove('sticky-nav')
    }
  }
}