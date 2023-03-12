// Background Music
music = document.querySelector("#music");
music.volume = 0.3;

// Background Video
bgvid = document.querySelector("#bgvid");

// Click Sound
var click = document.querySelector("#clicksound");
click.volume = 0.6;

boutons = document.querySelectorAll(".click");

boutons.forEach(function (truc) {
  truc.addEventListener("click", function () {
    click.load();
    click.play();
  });
});

// Start Button
start = document.querySelector("#start");

// Punch Hole
hole = document.querySelector("#overlay");

// Rocket video
rocket = document.querySelector("#rocket");

// Tag
tag = document.querySelector("#tag");

// Titre
titre = document.querySelector("h1");

// Systeme solaire
asoleil = document.querySelector("#soleil");
amercure = document.querySelector("#mercure");
avenus = document.querySelector("#venus");
aterre = document.querySelector("#terre");
amars = document.querySelector("#mars");
ajupiter = document.querySelector("#jupiter");
asaturne = document.querySelector("#saturne");
auranus = document.querySelector("#uranus");

// Canvas
const etoile = document.getElementById("etoile");
const ctx = etoile.getContext("2d");

//Etoile Blanche
ctx.strokeStyle = "darkblue";
ctx.lineWidth = 8;

ctx.beginPath();
ctx.moveTo(250, 90);
ctx.lineTo(210, 210);
ctx.lineTo(250, 180);
ctx.lineTo(290, 210);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 180);
ctx.lineTo(185, 135);
ctx.lineTo(315, 135);
ctx.closePath();
ctx.stroke();

function begin() {
  document.getElementById("etoile").classList.add("plula");
  start.classList.add("startDepop");
  hole.classList.add("overlayDepop");
  bgvid.play();
  music.play();
  rocket.play();
  rocket.classList.add("fuseelaunch");
  tag.classList.add("depop");
  titre.classList.add("titreafter");
  document.querySelector(".code").classList.add("codepop");
}

// 3D Mode
function mode3D() {
  document.querySelector(".cube").classList.toggle("cube3D");
  document.querySelector("#all").classList.toggle("all3D");
  document.querySelector("#rond").classList.toggle("switchbtn");
  amercure.classList.toggle("depop");
  avenus.classList.toggle("depop");
  aterre.classList.toggle("depop");
  amars.classList.toggle("depop");
  ajupiter.classList.toggle("depop");
  asaturne.classList.toggle("depop");
  auranus.classList.toggle("depop");
}

// Information Display
function terre() {
  document.querySelector("#all").classList.toggle("depop2");
  document.querySelector("#terre").classList.toggle("info");
  document.querySelector(".bgnoir").classList.toggle("black");
  document.querySelector("#holo").play();
  document.querySelector("#holo").playbackRate = 1.4;
  document.querySelector(".details").classList.toggle("pop");
}

function holoplay() {
  document.querySelector("#holo").playbackRate = 0;
}

function holopause() {
  document.querySelector("#holo").playbackRate = 1;
}

// Hover on planets
function soleilup() {
  document.querySelector(".soleil").classList.add("astreup");
}
function soleildown() {
  document.querySelector(".soleil").classList.remove("astreup");
}

function mercureup() {
  document.querySelector(".mercure").classList.add("astreup");
}
function mercuredown() {
  document.querySelector(".mercure").classList.remove("astreup");
}

function venusup() {
  document.querySelector(".venus").classList.add("astreup");
}
function venusdown() {
  document.querySelector(".venus").classList.remove("astreup");
}

function terreup() {
  document.querySelector(".terre").classList.add("astreup");
}
function terredown() {
  document.querySelector(".terre").classList.remove("astreup");
}

function marsup() {
  document.querySelector(".mars").classList.add("astreup");
}
function marsdown() {
  document.querySelector(".mars").classList.remove("astreup");
}

function jupiterup() {
  document.querySelector(".jupiter").classList.add("astreup");
}
function jupiterdown() {
  document.querySelector(".jupiter").classList.remove("astreup");
}

function saturneup() {
  document.querySelector(".saturne").classList.add("astreup");
}
function saturnedown() {
  document.querySelector(".saturne").classList.remove("astreup");
}

function uranusup() {
  document.querySelector(".uranus").classList.add("astreup");
}
function uranusdown() {
  document.querySelector(".uranus").classList.remove("astreup");
}

alienpop = 40000;
aliendepop = 45000;

// Alien qui pop
setTimeout(() => {
  document.querySelector("#alien").style.bottom = "0px";
  document.querySelector(".bulle").style.bottom = "140px";
}, alienpop);

// Alien qui depop
setTimeout(() => {
  document.querySelector("#alien").style.bottom = "-160px";
  document.querySelector(".bulle").style.bottom = "-160px";
}, aliendepop);

// Konami Code
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var konamiCodePosition = 0;

document.addEventListener("keydown", function (e) {
  if (e.keyCode === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
  } else {
    konamiCodePosition = 0;
  }

  if (konamiCodePosition === konamiCode.length) {
    AlerteRouge();
    konamiCodePosition = 0;
  }
});

function AlerteRouge() {
  document.querySelector(".btnred").style.right = "50px";
  alert("Ne cliquez pas sur le bouton rouge !");
}

countdown = 10;

kontarebour = document.querySelector("#kontarebour");
destruct = document.querySelector("#destruct");

function explosion() {
  alienpop = 999999999;
  aliendepop = 999999999;
  music.volume = 0;
  document.querySelector("#alarm").volume = 0.4;
  document.querySelector(".bulle").innerHTML = "Thank you 💕";
  setTimeout(() => {
    document.querySelector("#explosion").play();
  }, "10000");
  setTimeout(() => {
    document.querySelectorAll(".text-copy").forEach(element => {
        element.classList.add('apparaitsvg');
    });
  }, "20000");
  setTimeout(() => {
    document.querySelector("#bigbang").classList.add('toutnoir');
    document.querySelectorAll(".text-copy").forEach(element => {
        element.classList.add('animetoi');
    });
  }, "25000");
  setTimeout(() => {
    document.querySelector("#alien").style.bottom = "0px";
    document.querySelector(".bulle").style.bottom = "140px";
  }, "10000");
  setTimeout(() => {
    document.querySelector("#alien").style.bottom = "-160px";
    document.querySelector(".bulle").style.bottom = "-160px";
  }, 12000);
  document.querySelector("#bigbang").style.opacity = "1";
  document.querySelector("#bigbang").volume = 0;
  document.querySelector("#alarm").play();
  kontarebour.classList.remove("cache");
  destruct.classList.remove("cache");
  intervalle = setInterval(function () {
    if (countdown == 0) {
      clearInterval(intervalle);
      kontarebour.style.display = "none";
      destruct.style.display = "none";
    } else {
      kontarebour.innerHTML = countdown;
      countdown--;
    }
  }, 1000);
  setTimeout(() => {
    document.querySelector("#bigbang").play();
  }, "10000");
}
