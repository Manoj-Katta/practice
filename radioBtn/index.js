const check = document.getElementById("checkbox");
const sub = document.getElementById("sub");
const pay = document.getElementById("pay");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const rupay = document.getElementById("rupay");
const submit = document.getElementById("submit");
submit.onclick = function(){
    if(check.checked){
        sub.textContent="You are subscribed";
    }
    else{
        sub.textContent="You are not subscribed";
    }
    if(visa.checked){
        pay.textContent = "You paid using visa";
    }
    else if(master.checked){
        pay.textContent = "You paid using mastercard";
    }
    else if(rupay.checked){
        pay.textContent = "You paid using rupay";
    }
    else{
        pay.textContent = "You are not using anything";
    }
}

