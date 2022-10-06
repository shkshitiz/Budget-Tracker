function invokeUserLogout() {
  fetch('/api/sessions',{
    method: 'DELETE'
  }).then(res => {
    if (res.error){
      alert("Failed to logout. Please try again.")
    } else {
      const logout = document.getElementById('logoutBtn')
      logout.classList.add('loggedOut')
      state.loggedInUserName = null
    }
  })
}