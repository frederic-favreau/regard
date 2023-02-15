let iris = document.getElementsByClassName("iris");
document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";
  for (let i = 0; i < 2; i++) {
    iris[i].style.left = x;
    iris[i].style.top = y;
    iris[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

const femme = document.getElementById("btn-femme");
const homme = document.getElementById("btn-homme");
const imgFemme = document.getElementById("left");
const imgHomme = document.getElementById("right");
const game = document.getElementById("content");
const blocName = document.getElementById("content-0");
const body = document.querySelector('body');
const submitName = document.getElementById("btn-submit");
const nameText = document.getElementById("input-name");
let nameGenerate = document.querySelectorAll('.name-generate');
let nameValue;

submitName.addEventListener("click", function () {
  nameValue = nameText.value;
  blocName.style.display = "none";
  game.style.display = "block";
  nameGenerate.innerHTML = nameValue;
});

femme.addEventListener("click", function () {
  body.style.cursor = "url(./img/femme.png), auto";
  imgFemme.style.display = "block";
  imgHomme.style.display = "none";
  nameGenerate.innerHTML = nameValue;
});

homme.addEventListener("click", function () {
  body.style.cursor = "url(./img/cursor.png), auto";
  imgHomme.style.display = "block";
  imgFemme.style.display = "none";
  nameGenerate.innerHTML = nameValue;
});
