const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
const stopButton =document .getElementById('stopButton');
const rewindButton=document.getElementById('rewindButton');
const contolbox=document.getElementById('contolbox');
playButton.addEventListener('click', () => {
    audio.play(); 
});
stopButton.addEventListener('click',() =>{
    audio.pause(); 
});
rewindButton.addEventListener('click',()=>{
    audio.currentTime=0
});

audio.onloadedmetadata = function(){
    contolbox.max =audio.duration;
    contolbox.value = audio.currentTime;
}
if(audio.play()){
    setInterval(()=>{
        contolbox.value = audio.currentTime;
},500);
}
