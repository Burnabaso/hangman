const letters = document.querySelectorAll(".letter");
const spans = document.getElementsByTagName("span");
const answerSection = document.getElementById("answer-section");
var words = ["labyrinth", "chronicle", "mystique", "banana"];
var chosenWord = words[Math.floor(Math.random() * words.length)];
// user has max 6 attempts 
var attempt = 0;
// keep track of the number of presses of keys
var press = 0;
window.onload = renderDashes();
// renders dashes based on number of characters of the random word
function renderDashes() {
  for (i in chosenWord) {
    var newDash = document.createElement("span");
    newDash.innerHTML = "-";
    answerSection.appendChild(newDash);
  }
}
// just for testing purposes to see the word
// console.log(chosenWord)
function alertUser(msg) {
  if (msg === "win") {
    window.alert("Congratulations! You Won!");
  } else {
    window.alert("Bad Luck! The man is hanged!");
  }
  setTimeout(function (){
    window.location.reload();
  },800)
  
}
addEventListener("keydown", function (k) {
    var keyPressed = k.key;
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].innerHTML.toLowerCase() === keyPressed) {
            if(k.key === chosenWord[press]){
                spans[press].innerHTML = letters[i].innerHTML;
            }
            // if the number of correct presses reached the end of the word => win
            else if (press === chosenWord.length){
                alertUser("win")
            }
            else{
                attempt++
                // add body part according to number of wrong attempt
                addHang(attempt);
                press--;
                if (attempt===6){
                    alertUser("lose")
                }
            }
            
        }
    }
    press++
});
