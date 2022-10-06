function invokeUserLogout() {
  fetch('/api/sessions',{
    method: 'DELETE'
  }).then(res => {
    if (res.err){
      alert("Failed to logout. Please try again.")
    } else {
      sessionStorage.clear()
      const logout = document.getElementById('logoutBtn')
      logout.classList.add('loggedOut')
      state.loggedInUserEmail = null
      state.loggedInUsername = null
      state.userTransactions = null
      state.username = null
      renderLandingPage()
    }
  })
}