const video = document.querySelector(".video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const progress = document.querySelector("#progress")
const overlay = document.querySelector("#overlay");

play.addEventListener("click", reproducir);

function reproducir() {
    play.hidden = true;
    pause.hidden = false;
    console.log("Play");
    video.play();
    backward.classList.remove("ocultar");
    forward.classList.remove("ocultar");
    overlay.classList.add("player-overlay");
}

pause.addEventListener("click", pausa);

function pausa() {
    play.hidden = false;
    pause.hidden = true;
    console.log("Pausa");
    video.pause();
}

backward.addEventListener("click", retroceder);

function retroceder() {
    console.log("Atras 10 s");
    video.currentTime -= 10;
}

forward.addEventListener("click", avanzar);

function avanzar() {
    console.log("adelantar 10 s");
    video.currentTime += 10;
}

video.addEventListener("loadedmetadata", videoLoaded);

function videoLoaded() {
    progress.max = video.duration;
}

video.addEventListener("timeupdate", timeUpdate);

function timeUpdate() {
    progress.value = video.currentTime;
}

progress.addEventListener("input", inputUpdate);

function inputUpdate() {
    video.currentTime = progress.value;
}
backward.classList.add("ocultar");
forward.classList.add("ocultar");