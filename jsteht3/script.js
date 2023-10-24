p = document.getElementById("date")
button = document.getElementById("dateButton")

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let date = new Date().getDay()

button.addEventListener("click", funktionNimi)

function funktionNimi() {
    p.innerText = "Tänään on " + weekday[date]
    button.style.display = "none";
}