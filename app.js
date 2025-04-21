const choices=["rock","paper","scissor"];
const playerDisplay=document.getElementById("playerdisplay");
const ComputerDisplay=document.getElementById("computerdisplay");
const DisplayResult=document.getElementById("Displayresult");
const playerscoreDisplay=document.getElementById("playerscore");
const computerscoreDisplay=document.getElementById("computerscore");
let playerscore=0;
let computerscore=0;

function playgames(playerChoice){
    const computerChoice= choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerChoice===computerChoice){
        result="It's A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice=== "scissor")?"YOU WIN":"YOU LOSE";
                break;
            case "paper":
                result=(computerChoice === "rock")?"YOU WIN":"YOU LOSE";
                break;
             case "scissor":
                result=(computerChoice ==="paper")?"YOU WIN":"YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent=`PLAYER: ${playerChoice}`
    ComputerDisplay.textContent=`COMPUTER: ${computerChoice}`
    DisplayResult.textContent=result;
    DisplayResult.classList.remove("greencolor","redcolor");
    
    

    switch(result){
        case "YOU WIN":
            DisplayResult.classList.add("greencolor");
            playerscore++;
            playerscoreDisplay.textContent=playerscore;
            break;
        case "YOU LOSE":
            DisplayResult.classList.add("redcolor");
            computerscore++;
            computerscoreDisplay.textContent=computerscore;
    }
}
function resetbutton(){
   let playerscore=0;
   let computerscore=0;
    playerscoreDisplay.textContent=playerscore;
    computerscoreDisplay.textContent=computerscore;
    playerDisplay.textContent="Player:";
    ComputerDisplay.textContent="Computer:"
    DisplayResult.textContent="";
    DisplayResult.classList.remove("greencolor","redcolor");
};

