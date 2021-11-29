const initLanguageList = [
  {
    flag: '/src/img/language/gbr.jpg',
    language: 'English',
    short: 'EN',
    checked: true,
  },
  {
    flag: '/src/img/language/frn.jpg',
    language: 'Francias',
    short: 'FR',
    checked: false,
  },
  {
    flag: '/src/img/language/rus.jpg',
    language: 'Русский',
    short: 'RU',
    checked: false,
  },

  {
    flag: '/src/img/language/ukr.svg',
    language: 'Українська',
    short: 'UA',
    checked: false,
  },
]

let languageList = initLanguageList

const select = () => {
  const selectHeader = document.querySelectorAll('.select__header')
  const selectItem = document.querySelectorAll('.select__item')

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle)
  })

  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose)
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active')
  }

  function selectChoose() {
    let select = this.closest('.select')
    currentItem = this.closest('.select').querySelector('.select__current')

    currentItem.innerHTML = this.innerHTML
    select.classList.remove('is-active')
  }
}

select()
