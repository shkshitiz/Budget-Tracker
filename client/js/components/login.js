function renderLogin() {
  document.querySelector('#page').innerHTML = `
    <section class='log-in'>
      <form onSubmit="login(event)">
        <h2>Login:</h2>
        <fieldset>
          <label for="">Email: </label>
          <input type="text" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label>
          <input type="password" name="password">
        </fieldset>
        <button>Login</button>
      </form>
    </section>
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
        const username = res
        // state.loggedInUserName = username
        renderOverview()
        drawChart()
        console.log('logged in')
      }
    })
}

function renderError(errorMessage) {
  const page = document.querySelector('#page')
  page.innerHTML = 
    `<h2 style='color: red; font-size: 15px'>${errorMessage}</h2>` + page.innerHTML
}