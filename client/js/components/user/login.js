function renderLogin() {
  document.querySelector('#page').innerHTML = `
  <div class="center-dialog d-flex align-items-center justify-content-center">
    <div class="card" style="width: 30rem">
      <div class="card-body">
        <h1 class="card-title">Login</h1>
        <form onSubmit="login(event)">
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
  `
}

function login(event) {
  event.preventDefault()
  const form = event.target
  
  // takes data from the form html tag and converts it into an object literal.
  const data = Object.fromEntries(new FormData(form))

  fetch('/api/sessions', { //talking to server
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, //sending json data to server
    body: JSON.stringify(data) // converts json to string
  })
    .then(res => res.json()) // get response from server
    .then(res => {
      if (res.error) {
        renderLogin()
        renderError(res.error)
      } else {
        state.loggedInUserEmail = res.email
        state.loggedInUsername = res.username
        renderTransactionOverview()
        console.log('logged in')
      }
    })
}

function renderError(errorMessage) {
  const page = document.querySelector('#page')
  page.innerHTML = 
    `<h2 style='color: red; font-size: 15px'>${errorMessage}</h2>` + page.innerHTML
}