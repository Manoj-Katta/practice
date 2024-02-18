const minNum = 1;
const maxNum = 100;
let number = Math.floor(Math.random()*(maxNum-minNum));
let running = true;
let attempts = 1;
while(running){
    let ans = window.prompt("Guess the number: ");
    ans = Number(ans);
    if(ans === number){
        window.alert(`You guessed the correct number ${ans} in ${attempts}`);
        running = false;
    }
    else{
        if(ans<number){
            window.alert(`Number is too high`);
            attempts++;
        }
        else if(ans>number){
            window.alert(`Number is too low`);
            attempts++;
        }
        else{
            window.alert(`You guessed the correct number ${ans} in ${attempts}`);
            running = false;
        }
    }
   
}