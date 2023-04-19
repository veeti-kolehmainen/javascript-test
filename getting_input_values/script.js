var input = document.querySelector(".js-name");
var nameElem = document.querySelector(".js-change-name");
function callback(event) {
    nameElem.innerText = event.target.value
}
input.addEventListener("keyup", callback)




/*input.addEventListener("keyup", function(event) {
    nameElem.innerText = event.target.value
})*/