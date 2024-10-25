const letters = document.querySelectorAll(".letter");
const answerSection = document.getElementById("answer-section");
var words = ["Labyrinth", "Chronicle", "Mystique","Banana"];
var chosenWord = words[Math.floor(Math.random() * words.length)];

// renders dashes based on number of characters of the random word
function renderDashes (){
    for (i in chosenWord){
        var newDash = document.createElement("span");
        newDash.innerHTML = "-";
        answerSection.appendChild(newDash);
    }
}
// renderDashes();
// Use this to access the letter in the div 
// letters[0].innerHTML
window.onload = renderDashes();
addEventListener("keydown",function (k){
    var keyPressed = k.key
    for (var i=0;i<letters.length;i++)
    {
        if(letters[i].innerHTML.toLowerCase() === keyPressed){
            // implement game logic here
        }
    }
})