const questions=[
    {
        question:'Which planet is known as the "Red Planet"?',
        answers:[
            {text: "Venus",correct:false},
            {text: "Mars",correct:true},
            {text: "Jupiter",correct:false},
            {text: "Saturn",correct:false}
        ]
    },
    {
        question:'Which country is known as the "Land of the Rising Sun"?',
        answers:[
            {text:"China",correct:false},
            {text:"japan",correct:true},
            {text:"South Korea",correct:false},
            {text:"Thailand",correct:false},
        ]
    },
    {
        question:"What is the largest organ in the human body?",
        answers:[
            {text:"Heart",correct:false},
            {text:"Brain",correct:false},
            {text:"Skin",correct:true},
            {text:"Liver",correct:false}
        ]
    },
    {
        question:"The study of starts and planets is called?",
        answers:[
            {text:"Biology",correct:false},
            {text:"Astrology",correct:false},
            {text:"Astronomy",correct:true},
            {text:"Geology",correct:false}
        ]
    },
    {
        question:"Which gas do humans need to breath in order to survive?",
        answers:[
            {text:"Carbon dioxide",correct:false},
            {text:"Oxygen",correct:true},
            {text:"Nitrogen",correct:false},
            {text:"Hydrogen",correct:false}
        ]
    }
];

const questionElement = document.getElementById("ques");
const answerButton = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-btn");

let currentQues = 0;
let score = 0;

function startQuiz(){
    currentQues = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQues();
}

function showQues(){
    resetState();
    let currQuestion = questions[currentQues];
    let quesNo = currentQues + 1;
    questionElement.innerText = quesNo + ". " + currQuestion.question;

    currQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQues++;
    if(currentQues < questions.length){
        showQues();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQues < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz(); 