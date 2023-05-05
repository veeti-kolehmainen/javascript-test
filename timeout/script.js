const h2 = document.getElementById("h2")
h2.innerText = "THREE!!!"
setTimeout(function() {
    h2.innerText = "TWO!!!"
}, 1000)
setTimeout(function() {
    h2.innerText = "ONE!!!"
}, 2000)
setTimeout(function() {
    h2.innerText = "COMPLETE!!!"
    const body = document.querySelector("body")
    body.style.backgroundColor = "#5df59f"
    body.style.color = "yellow"
}, 3000)
