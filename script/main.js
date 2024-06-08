// Ambil referensi video
var video = document.querySelector('');

// Fungsi untuk memainkan video
function playVideo() {
    video.play();
}

// Fungsi untuk menghentikan video
function pauseVideo() {
    video.pause();
}

// Fungsi untuk mengatur volume video
function setVolume(volume) {
    video.volume = volume;
}
