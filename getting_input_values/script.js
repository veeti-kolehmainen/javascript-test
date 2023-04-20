var input = document.querySelector(".js-name");
var nameElem = document.querySelector(".js-change-name");
function callback(event) {
    nameElem.innerText = event.target.value
}
input.addEventListener("keyup", callback)


// alternative way to do it
/*input.addEventListener("keyup", function(event) {
    nameElem.innerText = event.target.value
})*/