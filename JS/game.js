var objImage = null;
            function init() {
                objImage = document.getElementById("contour");
                objImage.style.position = "relative";
                objImage.style.left = "0px";
                objImage.style.top = "0px";
            }
            function getKeyAndMove(e) {
                var key_code = e.which || e.keyCode;
                switch (key_code) {
                    case 37: //gauche
                        moveLeft();
                        break;
                    case 38: //haut
                        moveUp();
                        break;
                    case 39: //droite
                        moveRight();
                        break;
                    case 40: //bas
                        moveDown();
                        break;
                }
            }
            function moveLeft() {
                objImage.style.left = parseInt(objImage.style.left) - 20 + "px";
                objImage.style.rotate = "-90deg";
            }
            function moveUp() {
                objImage.style.top = parseInt(objImage.style.top) - 20 + "px";
                objImage.style.rotate = "0deg";
            }
            function moveRight() {
                objImage.style.left = parseInt(objImage.style.left) + 20 + "px";
                objImage.style.rotate = "90deg";
            }
            function moveDown() {
                objImage.style.top = parseInt(objImage.style.top) + 20 + "px";
                objImage.style.rotate = "180deg";
            }
            window.onload = init;

// Collision
const ship = document.querySelector("#vaisseau");
const planet = document.querySelector("#hitbox");
const code = document.querySelector("#code");

function checkCollision() {
  let shipRect = ship.getBoundingClientRect();
  let planetRect = planet.getBoundingClientRect();

  if (shipRect.x < planetRect.x + planetRect.width &&
    shipRect.x + shipRect.width > planetRect.x &&
    shipRect.y < planetRect.y + planetRect.height &&
    shipRect.height + shipRect.y > planetRect.y) {
    code.classList.add('codepop');
    document.querySelector('#retour').classList.add('retourpop');
  }
}
setInterval(checkCollision, 50);

// Click Sound
var click = document.querySelector('#clicksound');
click.volume = 0.6;

boutons = document.querySelectorAll('.click');

boutons.forEach(function(truc) {
    truc.addEventListener('click', function() {
        click.load();
        click.play();
    });
});

// Boutons OK
function bouton1() {
    document.querySelector('#vif').classList.add('plurien');
    document.querySelector('#ok1').classList.add('okdisparait');
}

function bouton2() {
    document.querySelector('#blabla').classList.add('plurien');
    document.querySelector('#vif').classList.add('vifpop');
    document.querySelector('#ok2').classList.add('okdisparait');
}
