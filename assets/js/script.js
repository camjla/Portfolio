////=============FIREBASEE================================
const firebaseConfig = {
  apiKey: 'AIzaSyAcR8f5GC7k5dTTJsev9RC7lXQp53Ce_Rs',
  authDomain: 'portfolio--camila.firebaseapp.com',
  projectId: 'portfolio--camila',
  storageBucket: 'portfolio--camila.appspot.com',
  messagingSenderId: '864659862597',
  appId: '1:864659862597:web:a287458232033cd5de9f2c'
}

//Show and hidden menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
//nav-menu ou toggle ou close é o id que definimos no HTML

//Validate if constant exists- abre menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
// Menu Hidden
//validade if constant exist- fecha menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//Remove menu mobile - qnd estiver no cell
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  //qnd clica em algum (home, about) vai remover a classe de show menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Skills buttons : fazer com que suba as skills e suma
const skillsContent = document.getElementsByClassName('skills-content'),
  skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills-content skills-close'
  }
  if (itemClass === 'skills-content skills-close') {
    this.parentNode.className = 'skills-content skills-open'
  }
}
skillsHeader.forEach(eL => {
  eL.addEventListener('click', toggleSkills)
})
//OWL
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: true
    }
  }
})

//SCROLL SECTION ACTIVE LINK -- a cada vez que descer e estiver no topico por exemplo contato, no menu o contato estará roxinho
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

//CHANGE BACKGROUND HEADER- uma sombrazinha e menu parado
function scrollHeader() {
  const nav = document.getElementById('header')
  //when the scroll is greater than 200 viewport height, add the scroll- header class to the header
  if (this.sccrollY >= 80) nav.classlist.add('scroll-header')
  else nav.classlist.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = ' uil-brightness'

//if user selected
const selectedTheme = localStorage.getItem('selected-theme') //study more about this
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dar-theme
const getCurrentTheme = () =>
  document.body.classList.contain(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-brightness'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  document.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
//ACTIVE /DEACTIVATE THE THEME MANUALLY WITH THE BUTTON
themeButton.addEventListener('click', () => {
  //add or remove the dark/icontheme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme) //search more about toggle

  //we save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme', 'getCurrentTheme')
  localStorage.setItem('selected-icon', getCurrentIcon())
})
