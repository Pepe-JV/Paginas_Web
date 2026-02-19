// Importamos los estilos
import './style.css'

// Menú móvil: mostrar y ocultar al pulsar el botón
const btnMenu = document.getElementById('btn-menu')
const menuMovil = document.getElementById('menu-movil')

btnMenu.addEventListener('click', () => {
  menuMovil.classList.toggle('hidden')
})

// Cerrar menú móvil al pulsar un enlace
menuMovil.querySelectorAll('a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    menuMovil.classList.add('hidden')
  })
})

// Navbar: añadir fondo blanco al hacer scroll
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow')
  } else {
    navbar.classList.remove('bg-white', 'shadow')
  }
})

// Formulario: simular envío con mensaje de confirmación
const formulario = document.getElementById('formulario-contacto')

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  const boton = formulario.querySelector('button[type="submit"]')
  boton.textContent = '¡Enviado! ✓'
  setTimeout(() => {
    boton.textContent = 'Solicitar demo gratuita'
    formulario.reset()
  }, 3000)
}


)