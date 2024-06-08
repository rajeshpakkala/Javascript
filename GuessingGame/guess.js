let userinput=document.getElementById("inputbyuser");
let randomno=Math.ceil(Math.random()*100);
let signintext=document.getElementById("signintext");
function signin(){
   
        let guessno=parseInt(userinput.value);
        if(guessno>randomno){
        signintext.textContent="Too high!!!!!!try again..."
        signintext.style.backgroundColor='red';
    }
    else if(guessno<randomno){
        signintext.textContent="Too low!!!!!!try again..."
        signintext.style.backgroundColor='red';
    }
    else if(guessno===randomno){
        signintext.textContent="Congratulationsss..Take Gold Medal"
        signintext.style.backgroundColor='yellow';
    }
    else{
        signintext.textContent="Invalid Input..Try again"
        signintext.style.backgroundColor='red';
    }
}