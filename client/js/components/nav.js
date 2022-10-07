function renderNav() {
  document.getElementById("nav").innerHTML = `
  <h1>Budget Tracker</h1>
  <nav class="navbar navbar-expand-lg bg-light d-none d-sm-none d-md-none d-lg-block">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav-desktop navbar-nav me-auto mb-2 mb-lg-0 row">
          <li class="nav-item col">
            <a class="nav-link" onclick="renderTransactionOverview()">Overview</a>
          </li>
          <li class="nav-item col">
            <a class="nav-link" onclick="renderTransactionManager()">Manager</a>
          </li>
          <li class="nav-item col">
            <a class="nav-link" onclick="renderTransactionHistory()">History</a>
          </li>
          <li class="nav-item col">
            <a class="nav-link" onclick="invokeUserLogout()">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `
}