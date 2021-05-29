import {slideToShow} from "./slide.js";

let slides = []
const bodyEle = document.getElementById(`slide-show-container`)
for (let i = 0; i < 10; i++) {
    const bg = `#4488` + String(((i + 1)*14) % 100)
    let ele = slideToShow(`hdsdjhdjhdshd`, bg)
    if (i === 0) {
        ele.classList.add(`active`)
    }
    ele.id = `slide-ele-${i}`
    bodyEle.appendChild(ele)
    slides.push()
}

const nextArrow = document.getElementById("next-arrow")
const prevArrow = document.getElementById("prev-arrow")

nextArrow.addEventListener("click", (e) => {
    const activeElement = document.getElementsByClassName(`active`)[0]
    const activeId = activeElement.id
    const eleNumber = Number(activeId[activeId.length - 1])
    activeElement.classList.remove(`active`)
    
    console.log((eleNumber + 1) % 10)
    const nextElement = document.getElementById(`slide-ele-${(eleNumber + 1) % 10}`)
    nextElement.classList.add(`active`)
})