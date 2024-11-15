document.addEventListener('DOMContentLoaded', () => {
  const moduleLinks = document.querySelectorAll('.module-link')
  const moduleContents = document.querySelectorAll('.module-content')

  function showModule(moduleId) {
    moduleContents.forEach((content) => {
      content.style.display = content.id === moduleId ? 'block' : 'none'
    })

    moduleLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${moduleId}`
      )
    })
  }

  moduleLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const moduleId = link.getAttribute('href').substring(1)
      showModule(moduleId)
      history.pushState(null, '', `#${moduleId}`)
    })
  })

  // Handle browser back/forward navigation
  window.addEventListener('popstate', () => {
    const moduleId = location.hash.substring(1) || 'presentacion'
    showModule(moduleId)
  })

  // Show the correct module on page load
  const initialModuleId = location.hash.substring(1) || 'presentacion'
  showModule(initialModuleId)
})
