export const slideToShow = (text, bgColor) => {
    const ele = document.createElement(`div`)
    ele.classList.add(`slide-show-container__element`)
    ele.innerText = text
    ele.style.backgroundColor = bgColor

    return ele
}
