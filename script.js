
const btn = document.querySelector("button")
const container = document.querySelector("#container")
const gridWidth = document.body.clientWidth

btn.addEventListener("click", function() {
    let input = prompt("New size?")
    Number(input)
    if (input >= 2 && input <= 100) {
        remove()
        reset(input)
    } else {
        alert("Error! Please type one number between 2 and 100!")
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
        const temp = Math.floor(gridWidth/number)
        const size = temp.toString() + "px"
        square.style.height = size
        square.style.width = size
        square.addEventListener("mouseover",()=>
            square.style.cssText="background: black;height:"+size+";width:"+size)
        container.appendChild(square)
    }
}

reset(16)