;(function () {
  'use strict'

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')

  toggleSwitch.addEventListener('change', switchTheme, false)

  function switchTheme (e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')

      // Check if localStorage is available before using it
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', 'dark')
      }
    } else {
      document.documentElement.setAttribute('data-theme', 'light')

      // Check if localStorage is available before using it
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', 'light')
      }
    }
  }

  // Check if localStorage is available before using it
  const currentTheme = (typeof localStorage !== 'undefined') ? localStorage.getItem('theme') : null

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true
    }
  }
})()
