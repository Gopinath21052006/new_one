const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
const stopButton =document .getElementById('stopButton');
const rewindButton=document.getElementById('rewindButton');
const _2xButton =document.getElementById("2xButton");
const normulButton=document.getElementById("normalButton");
playButton.addEventListener('click', () => {
    audio.play(); 
});
stopButton.addEventListener('click',() =>{
    audio.pause(); 
});
rewindButton.addEventListener('click',()=>{
    audio.currentTime=0
});
_2xButton.addEventListener('click', ()=>{
    audio.playbackRate = 2;
})
normulButton.addEventListener('click' , ()=>{
audio.playbackRate=0;
});

