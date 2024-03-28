let userScore =0;
let computerScore =0;

const choices=document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const myScore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");


const drawGame=()=>{
console.log("It's a tie");
msg.innerText="It's a tie";
msg.style.background="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){    
        userScore++;
        console.log("User wins");
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}`;
        myScore.innerText=userScore;
        msg.style.background="green";
    }
    else{
        computerScore++;
        console.log("Computer wins");
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`
        compScore.innerText=computerScore;
        msg.style.background="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice = " +userChoice);

    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice = " +compChoice);


    if(userChoice===compChoice){
       drawGame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            compChoice==="scissors" ? userWin=true : userWin=false;
        }
        else if(userChoice==="paper")
        {
            compChoice==="rock" ? userWin=true : userWin=false;
        }
        else if(userChoice==="scissors")
        {
            compChoice==="paper" ? userWin=true : userWin=false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const genCompChoice=()=>{
    const choices=['rock','paper','scissors'];
    const randomChoice=Math.floor(Math.random()*3);
    return choices[randomChoice];

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute('id');
       
        playGame(userChoice);

    });
});