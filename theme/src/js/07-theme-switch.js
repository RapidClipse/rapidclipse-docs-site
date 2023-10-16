/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function toDarkTheme (resolve) {
  localStorage.setItem('theme', 'dark')
  document.querySelector('html').setAttribute('data-theme', 'dark')

  // Promise.resolve if existing
  resolve && resolve()
}

function toLightTheme (resolve) {
  localStorage.setItem('theme', 'light')
  document.querySelector('html').setAttribute('data-theme', 'light')

  // Promise.resolve if existing
  resolve && resolve()
}

function performThemeSwitch (checkbox, switchBall) {
  setTimeout(function () {
    const themeSwitchPromise = new Promise((resolve) => {
      if (checkbox.checked) {
        toDarkTheme(resolve)
      } else {
        toLightTheme(resolve)
      }
    })

    themeSwitchPromise.finally(function () {
      switchBall.innerHTML = ''
    })
  }, 100)
}

// create the loader div
const loader = document.createElement('div')
loader.classList.add('lds-dual-ring')

function toggleDarkThemeMode (checkbox) {
  const switchBall = document.querySelector('.theme-switch-wrapper .toggle-content .label .ball')
  switchBall.appendChild(loader)
  performThemeSwitch(checkbox, switchBall)
}

function isDarkTheme () {
  return localStorage.getItem('theme') === 'dark' ? 'checked' : 'unchecked'
}

// init
if (localStorage.getItem('theme') === 'dark') {
  toDarkTheme()
} else {
  toLightTheme()
}
