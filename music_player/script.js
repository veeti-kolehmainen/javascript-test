const songs = [
    "harharhar.wav",
    "myna_mintip.wav",
    "omfg_hello.wav",
    "super_idol.wav",
    "turipipip.wav",
    "turipipip.wav",
    "ding.wav"
];
const player = document.getElementById("player")

function createSongList() {
    const list = document.createElement("ol");
    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list
}


const songList = document.getElementById("songList")
songList.appendChild(createSongList());

const links = document.querySelectorAll("li")
for(const link of links) {
    link.addEventListener("click", setSong)
}

function setSong(e) {
    document.querySelector("#headphones").classList.remove("pulse");

    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;
    
    document.querySelector("#currentSong").innerText = `Now Playing: ${e.target.innerText}`
    
    player.load()
    player.play()
    document.querySelector("#headphones").classList.add("pulse")
}

function playAudio() {
    if(player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause()
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function(e) {
    const volume = e.target.value;
    player.volume = volume;
};

function updateProgress() {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById("progress")
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}

const loop = document.getElementById("loop")
loopClick = 0

loop.addEventListener("click", startLoop)

function startLoop() {
    if(loopClick == 0) {
        player.loop = true;
        loop.innerText = "Loop: On"
        loopClick++;
    } else {
        player.loop = false;
        loop.innerText = "Loop: Off"
        loopClick = 0
    }
}