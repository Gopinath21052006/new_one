const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
const stopButton = document.getElementById('stopButton');
const rewindButton = document.getElementById('rewindButton');
const contolbox = document.getElementById('contolbox');
const homeBtn = document.getElementById("homeBtn");

let isPlaying = false;

// Toggle Play / Pause
playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<i class="ri-play-line"></i>';
    } else {
        audio.play();
        playButton.innerHTML = '<i class="ri-pause-line"></i>';
    }
    isPlaying = !isPlaying;
});

// Stop
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playButton.innerHTML = '<i class="ri-play-line"></i>';
    isPlaying = false;
});

// Rewind
rewindButton.addEventListener('click', () => {
    audio.currentTime = 0;
});

// Seek bar
audio.addEventListener('loadedmetadata', () => {
    contolbox.max = audio.duration;
});

audio.addEventListener('timeupdate', () => {
    contolbox.value = audio.currentTime;
});

contolbox.addEventListener('input', () => {
    audio.currentTime = contolbox.value;
});

// Home Button - Just logs for now (you can link to another page or add feature)
homeBtn.addEventListener('click', () => {
    console.log("Home button clicked!");
    alert("You can add home navigation here.");
});
