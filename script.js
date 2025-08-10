
const btn = document.querySelector("button")
const container = document.querySelector("#container")

btn.addEventListener("click", function() {
    let input = prompt("New size?")
    Number(input)
    if (input > 0 && input < 100) {
        remove()
        reset(input)
    } else {
        alert("Error! Please type one number below 100!")
    }
})

function remove() {
    const children = document.querySelectorAll(".square")
    children.forEach((child)=>container.removeChild(child))
}

function reset(number) {
    for (i = 0; i < number*number; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        square.addEventListener("mouseover",()=>square.style.cssText="background: black")
        container.appendChild(square)
    }
}

reset(16)