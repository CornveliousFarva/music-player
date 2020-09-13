const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//Song Titles
const songs = ['hey', 'summer', 'ukelele']

// Keep Track of Song
let songIndex = 2;

//Initially Load Song Details Into DOM
loadSong(songs[songIndex]);

//Update Song Details
function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

//Play Song
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

//Pause Song
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

//Previous Song
function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex = songs.length -1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

//Next Song
function nextSong(){
    songIndex++;

    if (songIndex > songs.length -1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

//Upate Progress Bar
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

