

const container = document.querySelector("#container")


for (i = 0; i < 255; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover",()=>square.style.cssText="background: black")
    container.appendChild(square)
}