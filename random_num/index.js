const dice = document.getElementById("dice");
const number = document.getElementById("num");

dice.onclick = function(){
    number.textContent = Math.floor((Math.random()*6)+1);
}