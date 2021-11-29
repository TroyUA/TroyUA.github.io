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
