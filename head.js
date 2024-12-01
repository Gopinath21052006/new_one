const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
const stopButton =document .getElementById('stopButton');
const rewindButton=document.getElementById('rewindButton');
const contolbox=document.getElementById('contolbox');
const home=document.getElementById("headButton");

home.addEventListener('click',()=>{
      close();
}
)


playButton.addEventListener('click', () => {
    audio.play(); 
    playButton.style = "visibility:hidden;"
    stopButton.style = "visibility:inhert;"
});
stopButton.addEventListener('click',() =>{
    audio.pause(); 
    stopButton.style = "visibility:hidden;"
    playButton.style = "visibility:inhert;"
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
