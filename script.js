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
var currentPosition=0;

timeleft=40;

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
    }

];


//Event Listener

startEl.addEventListener("click",countDown)


function countDown()
{
    quizEl.classList.remove("hide");
     introEl.innerHTML="";
     var timeInterval =setInterval(function()
    {
        timeEl.textContent=timeleft +" seconds remaining";
        timeleft--;
        if(timeleft<0)
        {
        timeEl.textContent="Time over";
        clearInterval(timeInterval);
        timeEl.textContent="";
        }
    },500);
    
    quizTextEl.textContent = questions[0].question;
    buttonOneEl.innerHTML = questions[0].choices[0];
    buttonTwoEl.innerHTML = questions[0].choices[1];
    buttonThreeEl.innerHTML = questions[0].choices[2];
    buttonFourEl.innerHTML = questions[0].choices[3];
   
    // quizEl.classlist.remove("hide");
   
 }


buttonOneEl.addEventListener("click",checkAnswer);
buttonTwoEl.addEventListener("click",checkAnswer);
buttonThreeEl.addEventListener("click",checkAnswer);
buttonFourEl.addEventListener("click",checkAnswer);


function checkAnswer(event)
{
    if(event.target.innerHTML === questions[currentPosition].answer)
    {
       console.log("correct");
       messageEl.innerHTML="correct";
    // event.target.innerHTML.style.color='pink';
    //   nextQuestion();
    }
    else{
        console.log("wrong");
        console.log("time El value is " ,timeEl);
        timeEl=timeEl-10;
        console.log("time El value is " ,timeEl);
  nextQuestion();
        }
}

function nextQuestion()
{
currentPosition++;
messageEl.innerHTML="";
quizTextEl.textContent= questions[currentPosition].question;
buttonOneEl.innerHTML= questions[currentPosition].choices[0];
buttonTwoEl.innerHTML= questions[currentPosition].choices[1];
buttonThreeEl.innerHTML= questions[currentPosition].choices[2];
buttonFourEl.innerHTML= questions[currentPosition].choices[3];
}


// answerContainers[questionNumber].style.color = 'lightgreen';
// answerContainers[questionNumber].style.color = 'red';