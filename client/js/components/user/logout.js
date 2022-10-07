function invokeUserLogout() {
  fetch('/api/sessions',{
    method: 'DELETE'
  }).then(res => {
    if (res.err){
      alert("Failed to logout. Please try again.")
    } else {
      sessionStorage.clear()
      document.getElementById("nav").innerHTML = ''
      state.loggedInUserEmail = null
      state.loggedInUsername = null
      state.userTransactions = []
      state.username = null
      renderLandingPage()
    }
  })
}