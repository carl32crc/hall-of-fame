import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

(function renderApp() {
  window.addEventListener('DOMContentLoaded', init)
  function init() {
    const wrapper = document.getElementById('app')
    wrapper ? render(<App />, wrapper) : false
  }
})()
