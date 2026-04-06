const questionContainer = document.getElementById('question-container');
const restartButton = document.getElementById('restart-button');
const scoreContainer = document.getElementById('score-container');

let questions = [];
let score = 0;

const quizData = [{
    question: "Which array method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0
}, {
    question: "Which array method removes the last element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 1
}, {
    question: "Which array method adds an element to the beginning of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 3
}, {
    question: "Which array method removes the first element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 2
}];

function loadQuestions(quizData) {
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click',() => selectOption(index));
        optionsContainer.appendChild(optionButton);
    });
}

