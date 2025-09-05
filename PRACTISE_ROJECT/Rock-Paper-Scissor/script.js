let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const u_score = document.querySelector("#user-score");
const c_score = document.querySelector('#comp-score'); 

const compChoice = () =>{
    let compSelect = ["rock","paper","scissor"];
    let comp = Math.floor(Math.random()*3);
    return compSelect[comp];
}

const drawGame = () => {
    // console.log("No Winner");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor ="black";
}

const gameWinner = (userWin) =>{
    if(userWin){
        userScore++;
        u_score.innerText = userScore;
        msg.innerHTML = "You Win!";
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        c_score.innerText = compScore;
        msg.innerHTML = "You Lose!";
        msg.style.backgroundColor ="red";
    }
}

const playGame = (yourSelect) =>{
    // console.log("User Choice:",yourSelect);
    //computer choice
    let compOption = compChoice();
    // console.log("Computer Choice:",compOption);
    
    if(yourSelect === compOption){
        drawGame();
    }else{
        let userWin = true;
        if(yourSelect === "rock"){
            //paper,scissor
            userWin = compOption === "paper" ? false : true;
        }else if(yourSelect === "paper"){
            //rock , scissor
            userWin = compOption === "scissor" ? false : true;
        }else{//("scissor")
            //rock, paper
            userWin = compOption === "rock" ? false : true ;
        }
        gameWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let yourSelect = choice.getAttribute("id");
        // console.log("your choice is",yourSelect);
        playGame(yourSelect);
    })
});
