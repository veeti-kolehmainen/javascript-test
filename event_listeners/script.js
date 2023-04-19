var btn = document.querySelector(".js-button");
var totalClicks = 0
function addClicks(event) {
    // Do something in here
    totalClicks = totalClicks + 1;
    // totalClicks++;
    document.getElementById("totalClicks").innerText = "Times clicked: " + totalClicks;
}

btn.addEventListener("click", addClicks)





/*btn.addEventListener("click", function(event) {
    // Do something in here
    totalClicks = totalClicks + 1;
    // totalClicks++;
    document.getElementById("totalClicks").innerText = "Times clicked: " + totalClicks;
})*/