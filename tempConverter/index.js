const temp = document.getElementById("Temperature");
const toC = document.getElementById("toC");
const toF = document.getElementById("toF");
const ans = document.getElementById("ans");
let res;
function convert(){
    if(toC.checked){
        res = Number(temp.value);
        res = ((5/9)*(res))-32;
        ans.textContent = res.toFixed(2);
    }
    else if(toF.checked){
        res = Number(temp.value);
        res = ((9/5)*(res))+32;
        ans.textContent = res.toFixed(2);
    }
}