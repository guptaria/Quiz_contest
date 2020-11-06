var startEl=document.querySelector("#start");
var quizEl=document.querySelector("#quiz");
var hideEl=document.querySelector(".hide");
var quizTextEl=document.querySelector("#quizText");
var buttonOneEl=document.querySelector("#buttonOne");
var buttonTwoEl=document.querySelector("#buttonTwo");
var buttonThreeEl=document.querySelector("#buttonThree");
var buttonFourEl=document.querySelector("#buttonFour");
var timeEl=document.querySelector("#time");
var introEl=document.querySelector("#intro");
var messageEl=document.querySelector("#message");

var highScoresEl=document.querySelector("#highScores");
var currentPosition=0;
var scores=0;
timeleft=60;
var timeOver;

var highscores= JSON.parse(localStorage.getItem("scores")) || []

var questions =[

    {   question:"1. What is the HTML tag under which one can write the JavaScript code?",
        choices:["A. javascript","B. scripted","C. script","D. js"],
        answer:"C. script"
    },

    {
        question:"2. Which of the following is not a reserved word in JavaScript?",
        choices:["A. interface","B. throws","C. program","D. short"],
        answer: "C. program"
    } ,
    {
        question:"3. Who invented JavaScript?",
        choices:["A. Douglas Crockford","B. Sheryl Sandberg","C. Brendan Eich","D. John martin"],
        answer: "C. Brendan Eich"
    },
    {
        question:"4.Which tool can you use to ensure code quality?",
        choices:["A. Angular","B. jQuery","C. RequireJS","D. ESLint"],
        answer: "D. ESLint"
    },
    {
        question:"5.Which of the following is not considered a JavaScript operator?",
        choices:["A. new","B. this","C. delete","D. typeof"],
        answer: "B. this"
    },

    {
        question:"6. Which of the following is not JavaScript Data Types?",
        choices:["A. Undefined","B. Number","C. Boolean","D. Float"],
        answer: "D. Float"
    }
];

startEl.addEventListener("click",countDown);
buttonOneEl.addEventListener("click",checkAnswer);
buttonTwoEl.addEventListener("click",checkAnswer);
buttonThreeEl.addEventListener("click",checkAnswer);
buttonFourEl.addEventListener("click",checkAnswer);



function countDown()
{
    quizEl.classList.remove("hide");
     introEl.innerHTML="";
    timeInterval = setInterval(function()
    {
        timeEl.textContent=timeleft +" seconds remaining";
        timeleft--;
        if(timeleft<=0)
        {
        gameOver();
        }
    },1000);
}
    quizTextEl.textContent = questions[0].question;
    buttonOneEl.innerHTML = questions[0].choices[0];
    buttonTwoEl.innerHTML = questions[0].choices[1];
    buttonThreeEl.innerHTML = questions[0].choices[2];
    buttonFourEl.innerHTML = questions[0].choices[3];

    function gameOver(){
        clearInterval(timeInterval);
        timeEl.textContent="Game Over";
        quizEl.classList.add("hide")
        highScoresEl.classList.remove("hide");
    }
   


function checkAnswer(event)
{
    if(event.target.innerHTML === questions[currentPosition].answer)
    {
       messageEl.innerHTML="Yay!!! You have answered this question Correctly. "
       messageEl.style.color="green";
       setTimeout (nextQuestion,1000);
       
    }
    else{
        timeleft=timeleft-10;
        messageEl.innerHTML="Sorry!! This is the Wrong. Correct ans is : "+questions[currentPosition].answer;
        messageEl.style.color="red";
        setTimeout (nextQuestion,1000);
        }
        
}
    
function nextQuestion()
{
    // event.target.style.backgroundColor='';
messageEl.style.color="white";
currentPosition++;
console.log("question.length is" +questions.length);
if(currentPosition==questions.length)
{
    console.log("out of ques");
    gameOver();
}
else{
messageEl.innerHTML="";
quizTextEl.textContent= questions[currentPosition].question;
buttonOneEl.innerHTML= questions[currentPosition].choices[0];
buttonTwoEl.innerHTML= questions[currentPosition].choices[1];
buttonThreeEl.innerHTML= questions[currentPosition].choices[2];
buttonFourEl.innerHTML= questions[currentPosition].choices[3];

}}


document.querySelector("#scoreSubmit").addEventListener("click",function(event){
    var userName=document.querySelector("#userName").value;
    document.querySelector("#scoreSubmit").classList.add("hide");
    document.querySelector("#userName").classList.add("hide");
    document.querySelector("#scoreList").classList.remove("hide")
    var thisScore = {
        name:userName,
        score:timeleft
    }

    highscores.sort(function(a, b){return a-b});
    highscores.push(thisScore);
    localStorage.setItem("scores",JSON.stringify(highscores))

    for(score of highscores){
        document.querySelector("#scoreList").innerHTML+=`<tr>
        
        <td>${score.name}</td>
        <td>${score.score}</td>
        </tr>`;
    }
})