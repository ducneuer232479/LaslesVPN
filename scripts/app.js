const planList = document.querySelector('.plan-list')
const planItems = document.querySelectorAll('.plan-item')
const planBtns = document.querySelectorAll('.plan-button')
const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.menu-toggle')
const activeClass = 'is-show'

function resetItems() {
  for (let i = 0; i < planItems.length; i++) {
    planItems[i].classList.remove('is-active')
    planBtns[i].style.color = '#f53838'
    planBtns[i].style.backgroundColor = '#fff'
    planBtns[i].classList.remove('button--shadow')
  }
}

planList.addEventListener('click', function (e) {
  const clicked = e.target
  const btn = clicked.querySelector('.plan-button')
  const planItem = clicked.closest('.plan-item')
  if (planItem) {
    resetItems()
    planItem.classList.add('is-active')
    btn.style.color = '#fff'
    btn.style.backgroundColor = '#f53838'
    btn.classList.add('button--shadow')
  }
})

planList.addEventListener('mouseover', function (e) {
  const targetOver = e.target
  const btn = targetOver.closest('.plan-item')?.querySelector('.plan-button')
  const custom_style = {
    color: '#fff',
    backgroundColor: '#f53838'
  }
  if (btn) Object.assign(btn.style, custom_style)
})

planList.addEventListener('mouseout', function (e) {
  const targetOut = e.target
  const btn = targetOut.closest('.plan-item')?.querySelector('.plan-button')
  const custom_style = {
    backgroundColor: '#fff',
    color: '#f53838'
  }
  if (!e.target.classList.contains('is-active') && btn)
    Object.assign(btn.style, custom_style)
})

menuToggle.addEventListener('click', function (e) {
  menu.classList.add(activeClass)
})

window.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !e.target.matches('.menu-toggle--icon')) {
    menu.classList.remove(activeClass)
  }
})

// JQuery
$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  variableWidth: true,
  prevArrow: `<button type="button" class="slick-prev pull-left">
    <i class="fa-solid fa-arrow-left"></i>
  </button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
