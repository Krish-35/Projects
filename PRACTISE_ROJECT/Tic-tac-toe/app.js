let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true // player0 , player1

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    
    
    box.addEventListener("click", () => {
            if(turn0 == true){          
                //player0
                box.innerText = "X";
                box.style.color = "orange"
                turn0 = false;
                console.log("clicked x");
            }else{      
                //player1
                box.innerText = "O";
                box.style.color = "white";
                turn0 = true;
                console.log("clicked o");
            }
            box.disabled = true;

            checkWinner();
        
    });

});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulation! \n The winner is Player${Winner}`;
    msgContainer.classList.remove("hide");
    newBtn.innerText="New Game";
    disableBoxes();
}

const checkWinner =  () => {
    let winnerfound = false;
    for(let pattern of winningPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                winnerfound = true;
                return;
            }
        }
    }
    let allfilled = true; 
    for(let b of boxes){
        if(b.innerText === ""){
            allfilled = false;
            break;
        }
    }

    if(!winnerfound && allfilled){
        showtie();
    }
};

const showtie = () => {
    msg.innerText="No Winner!";
    msgContainer.classList.remove("hide");
    newBtn.innerText = "Play Again";
    disableBoxes();
};


newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);