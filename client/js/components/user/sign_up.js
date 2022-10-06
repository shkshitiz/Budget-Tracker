function renderSignUp() {
  document.querySelector('#page').innerHTML = `
  <div class="center-dialog d-flex align-items-center justify-content-center">
    <div class="card" style="width: 30rem">
      <div class="card-body">
        <h1 class="card-title">Budget Tracker</h1>
        <form onSubmit="createUser(event)">
          <input type="text" placeholder="Name" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
  `
}

function createUser(event){
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(userName => {
      state.loggedInUserName = userName
      renderLogin()
    })
}