// possible hex color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// button that chooses a random number between 0-15 and repeats it 6 times
btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
// random number generator 0-15
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}