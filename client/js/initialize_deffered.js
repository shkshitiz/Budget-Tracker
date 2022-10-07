
fetch('/api/sessions')
.then(res => res.json())
.then(userData => {
  if (typeof userData.email !== 'string') {
    renderLandingPage()
  }
})