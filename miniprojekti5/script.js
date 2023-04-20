var btn1 = document.querySelector(".btn-darkMode");
var btn2 = document.querySelector(".btn-lightMode");
var body = document.querySelector("body");
var bgColor = document.querySelector(".js-bg-color");
var textColor = document.querySelector(".js-text-color");
var catImg = document.getElementById("catImg");
var btncat1 = document.querySelector(".btn-cat-back");
var btncat2 = document.querySelector(".btn-cat-next");

btn1.addEventListener("click", function(event) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btn1.innerText = "Dark mode"
})
btn2.addEventListener("click", function(event) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    btn2.innerText = "Light mode"
})

bgColor.addEventListener("keyup", function(event){
    body.style.backgroundColor = event.target.value
});

textColor.addEventListener("keyup", function(event){
    body.style.color = event.target.value
});

btncat1.addEventListener("click", function(event){
    document.querySelector(".catImg").src = "img/svante_cat.jpg";
})

btncat2.addEventListener("click", function(event){
    document.querySelector(".catImg").src = "img/ove_cat.jpg";
})