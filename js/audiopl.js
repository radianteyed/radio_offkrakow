

var audio, playbtn, mutebtngit;

function initAudioPlayer() {
    audio = new Audio;
    audio.src = "http://stream2.nadaje.com:13332/offradiokrakow";
    audio.autoplay = true;
    audio.play();
   
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");

    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);

    
            

    function playPause() {
        if (audio.paused) {
            audio.play();
            playbtn.style.background = "url(img/pause-button.png) center no-repeat";
        } else {
            audio.pause();
            playbtn.style.background = "url(img/play-button.png) center  no-repeat";
        }
    }
    function mute() {
        if (audio.muted) {
            audio.muted = false;
            mutebtn.style.background = "url(img/speaker.png)  center  no-repeat";
        } else {
            audio.muted = true;
            mutebtn.style.background = "url(img/volume-off.png)  center  no-repeat";
        }
    }
  
}

window.addEventListener("load", initAudioPlayer);