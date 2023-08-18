const images = [
    {
      image_name: 'headphones.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'keyboards.jpg',
      number_of_items: 4,
    },
    {
      image_name: 'mice.jpg',
      number_of_items: 8,
    },
    {
      image_name: 'monitors.jpg',
      number_of_items: 5,
    },
    {
      image_name: 'smartphones.jpg',
      number_of_items: 5,
    },
    {
      image_name: 'cloudronics_services.jpg',
      number_of_items: 6,
    }
];

const timeDelay = 3000
let currentImageValue = 0,
displayNumber = 0,
score = 0,
totalAvailable = images.length,
chosen = false;



document.getElementById("statsContent").style.visibility = "hidden";
document.getElementById("currentScore").innerHTML = score;
document.getElementById("totalAvailable").innerHTML = totalAvailable;
document.getElementById("timeSetting").innerHTML = timeDelay / 1000;

const setImageSrc = (randomImageName) => {
    const imageContainer = document.getElementById("imageContainer")
    if(imageContainer.hasChildNodes()) {
        imageContainer.removeChild(imageContainer.firstElementChild);
    };

    const image = document.createElement("img");
    image.src = `images/${randomImageName}`;
    image.classList.add("fade")
    imageContainer.appendChild(image);
}

generateDisplayNumber = (numberOfItems, plusOrMinus) => {
    const split = Math.floor(Math.random() * 2)
    if(split === 0) {
        // display real number
        document.getElementById("number").innerHTML = numberOfItems
        displayNumber = numberOfItems
    }
    else {
        // display one higher or one lower
        document.getElementById("number").innerHTML = `${numberOfItems + plusOrMinus}`;
        displayNumber = numberOfItems + plusOrMinus;
    }
    currentImageValue = numberOfItems
};

const generatePlusOrMinus = () => {
    const number0to1 = Math.floor(Math.random() * 2)
    return number0to1 === 0 ? -1 : +1;
}

const setImageName = (randomImageName) => {
    const imageName = randomImageName.slice(0, randomImageName.length - 4)
    document.getElementById("item-name").innerHTML = imageName + "?";
};

const generate = () => {
    if(images.length === 0) {
        endOfGame()
        stopTimer()
        return;
    }

    chosen = false;
    const randomNumber = Math.floor(Math.random() * images.length);
    const randomImageName = images[randomNumber].image_name;
    setImageSrc(randomImageName);
    setImageName(randomImageName);
    const plusOrMinus = generatePlusOrMinus();
    const numberOfItems = images[randomNumber].number_of_items;
    generateDisplayNumber(numberOfItems, plusOrMinus)
    images.splice(randomNumber, 1);
};

const match = () => {
    if(!chosen) {
        currentImageValue === displayNumber ? score++ : score--
        chosen = true;
        document.getElementById("currentScore").innerHTML = score;
    }
}

const noMatch = () => {
    if(!chosen) {
        currentImageValue !== displayNumber ? score++ : score--
        chosen = true;
        document.getElementById("currentScore").innerHTML = score;
    }
}

const timer = () => {
    setInterval(generate, timeDelay);
};

const play = () => {
    document.getElementById("message").style.display = "none";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("play-button").style.display = "none";
    document.getElementById("statsContent").style.visibility = "visible";
    generate();
    timer();
};

const endOfGame = () => {
    document.getElementById("statsContent").style.visibility = "hidden";
   document.getElementById("message").style.display = "block";
   document.getElementById("imageContainer").style.display = "none";
   document.getElementById("statsContent").style.display = "none";
   document.getElementById("message").innerHTML = `Game Over, your score was ${score} / ${totalAvailable}`;
    setTimeout(() => location.reload(), 3000)
}

const stopTimer = () => {
    clearInterval(timer);
}