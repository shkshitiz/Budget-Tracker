function invokeUserLogout() {
  fetch('/api/sessions',{
    method: 'DELETE'
  }).then(() => {
    const logout = document.getElementById('logoutBtn')
    logout.classList.add('loggedOut')
    state.loggedInUserName = null
  })
}