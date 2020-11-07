// getting all the elements from DOM and storing it to local variables
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
timeleft=60;  // initialising the time to 60 sec
var timeOver;

var highscores= JSON.parse(localStorage.getItem("scores")) || [] // getting the value from local storage and converting string to object

// questions are stored in array of objects
var questions =[

    {   question:"1. What is the HTML tag under which one can write the JavaScript code?", //question
        choices:["A. javascript","B. scripted","C. script","D. js"],       // 4 choices to choose from
        answer:"C. script"   // correct answer
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

// adding Event Listener on click
startEl.addEventListener("click",countDown);
buttonOneEl.addEventListener("click",checkAnswer);
buttonTwoEl.addEventListener("click",checkAnswer);
buttonThreeEl.addEventListener("click",checkAnswer);
buttonFourEl.addEventListener("click",checkAnswer);


//Function for timer (set interval)
function countDown()
{
    quizEl.classList.remove("hide");    // removing hide class so that it will be visible now
     introEl.innerHTML="";
    timeInterval = setInterval(function()
    {
        timeEl.textContent=timeleft +" seconds remaining";   // showing time on screen 
        timeleft--;     // decrementing time
        if(timeleft<=0)
        {
        gameOver();
        }
    },1000);  // setting interval 1000millisec
    
}
//loading questions
    quizTextEl.textContent = questions[0].question;
    buttonOneEl.innerHTML = questions[0].choices[0];
    buttonTwoEl.innerHTML = questions[0].choices[1];
    buttonThreeEl.innerHTML = questions[0].choices[2];
    buttonFourEl.innerHTML = questions[0].choices[3];

    // execute when out of questions or time over
    function gameOver(){
        clearInterval(timeInterval);
        timeEl.textContent="Game Over";
        quizEl.classList.add("hide")
        highScoresEl.classList.remove("hide");
    }
   

// to check the answer
function checkAnswer(event)
{
    if(event.target.innerHTML === questions[currentPosition].answer) // if ans is correct
    {
       messageEl.innerHTML="Yay!!! You have answered this question Correctly. " // message to display if ans is correct
       messageEl.style.color="green";
       setTimeout (nextQuestion,10000);
       
    }
    else{
        timeleft=timeleft-10; // if ans is wron deducting 10 sec from timer
        messageEl.innerHTML="Sorry!! This is the Wrong. Correct ans is : "+questions[currentPosition].answer;
        messageEl.style.color="red";   // change color to red if ans wrong
        setTimeout (nextQuestion,10000);
        }
        
}
    // function to load next question
function nextQuestion()
{
currentPosition++; // incrementing the index of questions
console.log("question.length is" +questions.length);
if(currentPosition==questions.length)  // 
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
    var userName=document.querySelector("#userName").value; //getting username from user
    document.querySelector("#scoreSubmit").classList.add("hide");
    document.querySelector("#userName").classList.add("hide");
    document.querySelector("#scoreList").classList.remove("hide")
    var thisScore = {   //moving the  scores to username
        name:userName,  
        score:timeleft
    }

    highscores.sort(function(a, b){return a-b});  // sorting the scores from high to low
    highscores.push(thisScore); // pushing the scores to highscores
    localStorage.setItem("scores",JSON.stringify(highscores))  // changing object to string to store in local storage

    for(score of highscores){    // displaying the scores and username.
        document.querySelector("#scoreList").innerHTML+=`<tr>   
        
        <td>${score.name}</td>
        <td>${score.score}</td>
        </tr>`;
    }
})