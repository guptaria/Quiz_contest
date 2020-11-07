# Quiz_Contest

## Description
This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends that into the scores data.The timer starts When you click the "Start Quiz". Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty and a lower score.HTML and CSS and Javascript documents create a quiz with multiple choice questions with Javascript trivia.

## Table of Contents 

* [Installation](#Installation)
* [Technologies Used](#Technology)
* [Psuedo code](#Psuedocode)
* [Summary](#Summary)
* [Tests](#Tests)
* [ResourceReffered](#ResourceReffered)
* [Github_Links](#Github_Links)


## Installation
To install this code, download the zip file, or use GitHub's guidelines to clone the repository., Links are provided below in resources.

## Technologies Used
1.JavaScript<br>
2.HTML<br>
3.CSS

## Psuedo code
First create main HTML page that had information abt quiz and has START QUIZ button. This time all other classes should be hidden.
Then  create start button Event listener , when click on it the next classe for question should be visible and timer should start.
Then when click on the right answer , it should check whether the ans is correct or not.
    if ans is correct, then the message will be displayed in green color that ans is correct.
          and it should wait for a sec (timeout) and then move to the next question.
    else 10 sec should be deducted from time and message should be displayed in red color that this is wrong ans.
          and it should wait for a sec (timeout) and then move to the next question.
 It always check for if time is still left and its not out of questions.
    if yes  then call game over,
Then after the game is over, it should ask for the user name and scores should be updated with the time left.
Now we save this scores and usernname in the local storage, to do that change it first to string using stringify.
Then push these scores to highscores.         


## Summary
This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document
This project utilizes the use of appending HTML pages
This project has the following features:
A Start Quiz button
This starts a timer for the user
Total time for the Quiz is 60 Sec
An appended HTML page that features questions, and multiple choice answers
If questions are answered incorrectly, 10 seconds are deducted off remaining time
Answers are recording using an event listener, "click" and tracks correct answers.

## Tests 
### ScreenShots
This is the main page screen.
![](assets/screenshot1.png)
When you get the answer correct.
![](assets/screenshot2.png)
When you get the answer wrong.
![](assets/screenshot3.png)
Game is over, either its time over or its out of questions.
![](assets/screenshot4.png)
Submitting your initials to get the scores stored.
![](assets/screenshot5.png)
![](assets/screenshot6.png)

## ResourceReffered
[For Time Interval] https://www.w3schools.com/jsref/met_win_setinterval.asp <br>
[For Quiz concepts] https://stackoverflow.com/questions/3275164/javascript-quiz 

## Github_Links
[**URL of My Github Repository**](https://github.com/guptaria/Quiz_contest)<br>
[**URL of Deployed Application**](https://guptaria.github.io/Quiz_contest/.)

