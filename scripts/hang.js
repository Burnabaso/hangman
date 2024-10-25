const hangSection = document.getElementById("hang");
//O(1)
function addHang(attempts) {
  var part = document.createElement("img");
  if (attempts === 1) {
    part.classList.add("head");
    part.src="./assets/head.svg"
  } else if (attempts === 2) {
    part.classList.add("body");
    part.src="./assets/body.svg"
  } else if (attempts === 3) {
    part.classList.add("left-hand");
    part.src="./assets/left-hand.svg"
  } else if (attempts === 4) {
    part.classList.add("right-hand");
    part.src="./assets/right-hand.svg"
  } else if (attempts === 5) {
    part.classList.add("left-leg");
    part.src="./assets/left-leg.svg"

  } else if (attempts === 6) {
    part.classList.add("right-leg");
    part.src="./assets/right-leg.svg"
  }
  hangSection.appendChild(part)
}
