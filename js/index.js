const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')

  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active')

    //burger animation
    burger.classList.toggle('toggle')

  })
}
navSlide()

const submenuOpen= () => {
  const itemOne = document.getElementById('menu-item-one')
  const listOne = document.getElementById('dropdown-one')
  const titleOne = document.getElementById('menu-title-one')
  const itemTwo = document.getElementById('menu-item-two')
  const listTwo = document.getElementById('dropdown-two')
  const titleTwo = document.getElementById('menu-title-two')
  const itemThree = document.getElementById('menu-item-three')
  const listThree = document.getElementById('dropdown-three')
  const titleThree = document.getElementById('menu-title-three')

  itemOne.addEventListener('click', () => {
    listOne.classList.toggle('show-dropdown')
    if (window.innerWidth > 768) {
      titleOne.classList.toggle('menu-title-active-desktop')
    }
    else {
      titleOne.classList.toggle('menu-title-active-mobile')
    }
  })

  itemTwo.addEventListener('click', () => {
    listTwo.classList.toggle('show-dropdown')
    if (window.innerWidth > 768) {
      titleTwo.classList.toggle('menu-title-active-desktop')
    }
    else {
      titleTwo.classList.toggle('menu-title-active-mobile')
    }
  })

  itemThree.addEventListener('click', () => {
    listThree.classList.toggle('show-dropdown')
    if (window.innerWidth > 768) {
      titleThree.classList.toggle('menu-title-active-desktop')
    }
    else {
      titleThree.classList.toggle('menu-title-active-mobile')
    }
  })
}
submenuOpen()