const h1 = document.querySelector("h1")
const letters = h1.innerText.split("")
let html = ""

letters.forEach(letter => {
    let classes = ""
    if(letter !== " ") {
        classes = "letter js-letter"
    }
    if(letter == "a") {
        classes = classes + " a"
    }
    if(letter == "r") {
        classes = classes + " r"
    }
    html = html + `<span class='${classes}'>${letter}</span>`
})

h1.innerHTML = html
const jsLetters = document.querySelectorAll(".js-letter")
jsLetters.forEach(node => {
    node.addEventListener("mouseover", function(event) {
        this.classList.add("active")
    })
    node.addEventListener("mouseout", function(event) {
        this.classList.remove("active")
    })
})

const r = document.querySelector(".r")
r.addEventListener("mouseover", function(event) {
    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg')"
})
r.addEventListener("mouseout", function(event) {
    document.body.style.backgroundImage = null
})