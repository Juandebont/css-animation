const engine = document.getElementById("engine-btn");
const headLights = document.getElementById("headlight-btn");
const horn = document.getElementById("honk-btn");
const surface = document.querySelector(".surface");
const car = document.querySelector(".car");
const mute = document.getElementById("mute-btn");
let engineOn = false;
let lightsOn = false;
let isPlaying = false;

loadEventListeners();
playSong();

var snd = new Audio("./assets/song.mp3")

//Start engine
function startEngine() {
  engine.className = "engine-btn start";
  const span = engine.querySelector("span");
  span.innerText = "ON";
  surface.style.animation = "driveRight 8s linear infinite";
  car.style.animation = "suspension 1s linear infinite";
  engineOn = true;
}

//Stop engine
function stopEngine() {
  engine.className = "engine-btn";
  const span = engine.querySelector("span");
  span.innerText = "OFF";
  surface.style.animationPlayState =  "paused";
  car.style.animationPlayState =  "paused";
  engineOn = false;
}

//headlights on
function startHeadlights() {
    headLights.className = "headlight-btn on";
  const span = headLights.querySelector("span");
  span.innerText = "ON";
  car.firstElementChild.src = "./assets/img_06.png"
  lightsOn = true;
}

//headlights off
function stopHeadlights() {
    headLights.className = "headlight-btn";
  const span = headLights.querySelector("span");
  span.innerText = "OFF";
  car.firstElementChild.src = "./assets/img_05.png"
  lightsOn = false;
}

//check engine status
function engineStatus(){
    engineOn == false ? startEngine() : stopEngine();
    function startHeadlights() {
    headLights.className = "headlight-btn on";
  const span = headLights.querySelector("span");
  span.innerText = "ON";
  car.firstElementChild.src = "./assets/img_06.png"
  lightsOn = true;
}

//headlights off
function stopHeadlights() {
    headLights.className = "headlight-btn";
  const span = headLights.querySelector("span");
  span.innerText = "OFF";
  car.firstElementChild.src = "./assets/img_05.png"
  lightsOn = false;
}
}

//check light status
function lightStatus(){
    lightsOn == false ? startHeadlights() : stopHeadlights();
}

//Honk horn
function honk(){
    var snd = new Audio("./assets/honk.mp3")
    snd.volume = 0.04;
    snd.play();
}

//play song
function playSong(){
    setTimeout(function(){
        snd.loop = true;
        snd.volume = 0.01;
        snd.play();
    }, 3000)
}

//Toggle mute
function togglePlay() {
  isPlaying ? snd.pause() : snd.play();
};

snd.onplaying = function() {
  isPlaying = true;
  mute.style.backgroundImage = 'url(./assets/play.png)';
  console.log(mute)
};
snd.onpause = function() {
  isPlaying = false;
  mute.style.backgroundImage = 'url(./assets/Mute.svg)';
};

//event listeners
function loadEventListeners() {
  engine.addEventListener("click", engineStatus);
  headLights.addEventListener("click", lightStatus);
  horn.addEventListener("click", honk);
  mute.addEventListener("click", togglePlay);
}
