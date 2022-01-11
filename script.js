const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', newBoxes)

newBoxes()

function newBoxes() {
  const newBottom = window.innerHeight / 5 * 4 // window height
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top // box new space
    if (boxTop < newBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
