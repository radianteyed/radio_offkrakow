

var audio, playbtn, seek_bar;

function initAudioPlayer() {
    audio = new Audio;
    audio.src = "http://stream2.nadaje.com:13332/offradiokrakow";
    audio.autoplay = true;
   

  
}

window.addEventListener("load", initAudioPlayer);