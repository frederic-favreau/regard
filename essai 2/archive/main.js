const iris = document.querySelectorAll(".iris");
document.querySelector("body").addEventListener("mousemove", moveIris);
const najia = document.querySelector('h1')


function moveIris(event) {
  iris.forEach(function (element) {
    let x = element.parentNode.getBoundingClientRect().left + element.parentNode.clientWidth / 2;
    let y = element.parentNode.getBoundingClientRect().top + element.parentNode.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 90;
    element.style.transform = "rotate(" + rot + "deg) translate(-50%, -50%)";
    najia.innerText = "C'est parti Najia, ça va être la folie !!!!!"

  });
}