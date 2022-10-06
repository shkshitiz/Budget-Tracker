function renderSignUp() {
  document.querySelector('#page').innerHTML = `
  <main>
  <form onSubmit="createUser(event)">
    <h2>
      Sign Up
    </h2>
    <section>
      <label for="">Username: </label>
      <input type="text" name="username">
    </section>
    <section>
      <label for="">Email: </label>
      <input type="text" name="email">
    </section>
    <section>
      <label for="">Password: </label>
      <input type="password" name="password">
    </section>
    <button>Sign Up</button>
    </form>
   </main>
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