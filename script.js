var startEl=document.querySelector("#start");
var quizEl=document.querySelector("#quiz");
var quizTextEl=document.querySelector("#quizText");
var buttonOneEl=document.querySelector("#buttonOne");
var buttonTwoEl=document.querySelector("#buttonTwo");
var buttonThreeEl=document.querySelector("#buttonThree");
var buttonFourEl=document.querySelector("#buttonFour");
var timeEl=document.querySelector("#time");
var introEl=document.querySelector("#intro");

var currentPosition=0;
timeleft=10;

var questions=
[
    {   text:"What is Javascript?",
        choices:["aprogramming language","Browser","social website","Web app"],
        answer: "aprogramming language"
    },
    {
        text:"What is html?",
        choices:["aprogramming language","Browser","social website","Web app"],
        answer: "aprogramming language"
    }   
]

//Event Listener

startEl.addEventListener("click",countDown)


function countDown()
{
    introEl.classList.add("hide");
    // 
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
    quizEl.classlist.remove("hide");
    
    quizTextEl.innerHTML = questions[currentPosition].text;
    buttonOneEl.innerHTML = questions[currentPosition].choices[0];
    buttonTwoEl.innerHTML = questions[currentPosition].choices[1];
    buttonThreeEl.innerHTML = questions[currentPosition].choices[2];
    buttonFourEl.innerHTML = questions[currentPosition].choices[3];
 }


// buttonOneEl.addEventListener("click",checkAnswer);
// buttonTwoEl.addEventListener("click",checkAnswer);
// buttonThreeEl.addEventListener("click",checkAnswer);
// buttonFourEl.addEventListener("click",checkAnswer);


// function checkAnswer(event)
// {
//     if(event.target.innerHTML === questions[currentPosition].answer)
//     {
//       alert("right answer");
//       nextQuestion();
//     }
//     else{
//         timeEl=timeEl-10;
//   nextQuestion();
//         }
// }

// function nextQuestion()
// {
// currentPosition++;
// quizTextEl.innerHTML= questions[currentPosition].text;
// buttonOneEl.innerHTML= questions[currentPosition].choices[0];
// buttonTwoEl.innerHTML= questions[currentPosition].choices[1];
// buttonThreeEl.innerHTML= questions[currentPosition].choices[2];
// buttonFourEl.innerHTML= questions[currentPosition].choices[3];
// }