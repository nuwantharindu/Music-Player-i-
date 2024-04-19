let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("play-btn");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if (ctrlIcon.querySelector('i').classList.contains("fa-play")) {
        song.play();
        ctrlIcon.querySelector('i').classList.remove("fa-play");
        ctrlIcon.querySelector('i').classList.add("fa-pause");
        
    }
    else {
        song.pause();
        ctrlIcon.querySelector('i').classList.remove("fa-pause");
        ctrlIcon.querySelector('i').classList.add("fa-play");
        
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.querySelector('i').classList.remove("fa-play");
    ctrlIcon.querySelector('i').classList.add("fa-pause");
}

