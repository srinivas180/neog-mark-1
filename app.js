var readline = require("readline-sync");

var userName = readline.question("What is your name? - ");
console.log("Hello " + userName + " Welcome to \"Do you know me\" quiz");

var score = 0;
function quiz(question, correctAnswer) {
    var userAnswer = readline.question(question + " - ");
    if(userAnswer == correctAnswer) {
        score = score + 1;
        console.log("Correct Answer");
    }
    else {
        score = score - 1;
        console.log("Wrong Answer");
    }
    console.log("Score: " + score);
}

var questionsAndAns = [
    {
        question: "Where do I live?",
        answer: "xyz"
    },
    {
        question: "My favourite superhero?",
        answer: "xyz"
    },
    {
        question: "My favourite game?",
        answer: "xyz"
    },
    {
        question: "My favourite cartoon?",
        answer: "xyz"
    },
    {
        question: "My favourite game?",
        answer: "xyz"
    }
]

for(var i = 0; i < questionsAndAns.length; i++) {
    var currentQuestion = questionsAndAns[i];
    quiz(currentQuestion.question, currentQuestion.answer);
}

console.log("Final score: " + score);