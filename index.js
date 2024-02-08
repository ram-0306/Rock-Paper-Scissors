let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const btn = document.querySelector("#btn1");


const genCompChoice = ()=>{
// rock paper scissors
const options =["rock", "paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const draw = ()=>{
    
    console.log("draw");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoice)=>{
 console.log(userChoice);
 const compChoice=genCompChoice();
 console.log(compChoice);

 if(userChoice===compChoice){
    //draw
    draw();
 }else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors paper
       userWin= compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
        //rock scissors
        userWin=  compChoice==="scissors"? false:true;
    }else{
        //rock paper
        userWin=  compChoice==="rock"? false:true;
    }
    showWinner(userWin,userChoice,compChoice);

 }
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
const userChoice=choice.getAttribute("id");
playGame(userChoice);
  });
});

