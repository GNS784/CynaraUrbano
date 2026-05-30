// @section: =========================================================================== FACTORY FUNCTIONS ======================================================================

const menuAnimation = (tag) => {
  if (!tag) return

  if (scrollY > 0) {
    tag.style.backgroundColor = "var(--cor06)"
    tag.style.height = "70px"
    tag.style.boxShadow = "0px 0px 10px rgba(0,0,0,.318)"
  } else {
    tag.style.backgroundColor = "transparent"
    tag.style.height = "100px"
    tag.style.boxShadow = "none"
  }
}

const sacolaAnimation = (tag) => {
  if (scrollY === 0){
    tag.src = "image/elements/Shopping-Bar-Branco.png"
  } else if (scrollY > 1){
    tag.src = "image/elements/Shopping-Bar.png"
  }
}

const logoAnimation = (tag) => {
  if (!tag) return

  tag.src = scrollY > 0
    ? "image/isotipo.png"
    : "image/isotipoBranco.png"
}

const menuAnimationLogo = (tag) => {
  if (!tag) return

  tag.src = scrollY > 0
    ? "image/elements/menu.png"
    : "image/elements/menuBranco.png"
}

const animation = (tag) => {
  if (!tag) return

  tag.style.transform = "translate(0px,0px)"
  tag.style.opacity = "1"
}

const menuOn = (tag) => {
  tag.style.top = "0px"
  tag.style.opacity = "1"
}
const menuOff = (tag) => {
  tag.style.top = "-180px"
  tag.style.opacity = "0"
}

const functionMouseOn = (tag) => {
  if (scrollY === 0){
      for (let i of tag){
        i.style.color = "var(--cor06)"
      }
  } else if (scrollY > 1){
    for (let i of tag){
      i.style.color = "var(--cor02)"
    }
  }
}


// @endsection


// @section: ================================================================== ANIMATIOM MENU SMARTPHONE =========================================================================
const menu = document.querySelector("#menuLogo")
const sairMenu = document.querySelector("#sairIcone")
const ul = document.querySelector("ul")
menu.addEventListener("click", () => {menuOn(ul)})
sairMenu.addEventListener("click", () => {menuOff(ul)})


// @endsection




// @section: SETTINGS FROM SCROLL MOUSE WHEELS

document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav") // Nav está OK
  const logo = document.querySelector("#logo") // Logo do menu está OK 
  const menu = document.querySelector("#menuLogo") // Menu logo está OK
  const li = document.querySelectorAll("a.linkNav") // Link da navegação OK
  const sacola = document.querySelector("#sacola")
  menuAnimation(nav)
  logoAnimation(logo)
  menuAnimationLogo(menu)
  functionMouseOn(li)
  sacolaAnimation(sacola)
})

// @endsection






  // @section: changing the link color


  const linkNav = document.querySelectorAll("linkNav")
  



// @section: SETTINGS FROM LOAD FOR PAGE

history.scrollRestoration = "manual"

window.addEventListener("load", () => {

  window.scrollTo({
    top: 0,
    behavior: "auto"
  })





  // @endsection

  // @section: Animation for title menu
  const boxTitle = document.querySelector("#boxTitle")
  const subTitle = document.querySelector(".subTitle")
  const tituloCynara = document.querySelector("h2")
  const descriptionOn = document.querySelector("#descriptionOn")
  const img = document.querySelector("#aboutImg")
  animation(boxTitle)
  animation(subTitle)
  animation(tituloCynara)
  animation(descriptionOn)
  animation(img)

  // @endsection




})

// @endsection