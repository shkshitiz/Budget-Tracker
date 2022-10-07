

function renderMobileNavMenu() {
  if (typeof loggedInUserEmail === 'string') {
    document.querySelector('#mobile-nav').innerHTML = `

    `
  }
}