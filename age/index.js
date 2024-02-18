const age = document.getElementById("age");
const text = document.getElementById("text");
const submit = document.getElementById("submit");
let a;
submit.onclick=function(){
    a = age.value;
    a=Number(a);
    text.textContent="Your age is" + a;
}
