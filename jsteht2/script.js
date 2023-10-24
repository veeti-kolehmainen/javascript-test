p = document.getElementById("date")

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let date = new Date().getDay()
p.innerText = "Tänään on " + weekday[date]