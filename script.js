const car = document.getElementById("car");
let posX = 175;
let posY = 530;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && posX > 0) {
    posX -= 10;
  } else if (e.key === "ArrowRight" && posX < 350) {
    posX += 10;
  } else if (e.key === "ArrowUp" && posY > 0) {
    posY -= 10;
  } else if (e.key === "ArrowDown" && posY < 550) {
    posY += 10;
  }

  car.style.left = posX + "px";
  car.style.top = posY + "px";
});
