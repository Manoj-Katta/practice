let count = 0;
const increbtn = document.getElementById("plus");
const decrebtn = document.getElementById("minus");
const rese = document.getElementById("reset");
const curr = document.getElementById("num");
increbtn.onclick = function(){
    count++;
    curr.textContent = count+1;
};
decrebtn.onclick = function(){
    count--;
    curr.value = count-1;
};
rese.onclick = function(){
    count = 0;
    curr.value = count;
};