function invokeUserLogout() {
  fetch('/api/sessions',{
    method: 'DELETE'
  }).then(res => {
    if (res.error){
      alert("Failed to logout. Please try again.")
    } else {
      const logout = document.getElementById('logoutBtn')
      document.getElementById("nav").innerHTML = ''
      state.loggedInUserName = null
      state.loggedInUserEmail = null
      renderLandingPage()
    }
  })
}