const questionContainer = document.getElementById('question-container');
const restartButton = document.getElementById('restart-button');
const scoreContainer = document.getElementById('score-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

let score = 0;
let currentQuestionIndex = 0;
let selectedOption = null;

const quizData = [
{
    question: "Which array method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0
},
{
    question: "Which array method removes the last element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 1
},
{
    question: "Which array method adds an element to the beginning of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 3
},
{
    question: "Which array method removes the first element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 2
}
];

function loadQuestions() {
    optionsContainer.innerHTML = "";
    selectedOption = null;

    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;

            button.addEventListener('click', () => {  
            selectedOption = index;  
        });

        optionsContainer.appendChild(button);  
    });
}


function checkAnswer() {
if (selectedOption === null) {
    alert("Please select an option first.");
    return;
}

const currentQuestion = quizData[currentQuestionIndex];


if (selectedOption === currentQuestion.answer) {
    score++;
}

currentQuestionIndex++;

if (currentQuestionIndex < quizData.length) {
        loadQuestions();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.textContent = "Quiz complete!";
    optionsContainer.innerHTML = "";
    scoreContainer.textContent = `Your score: ${score}/${quizData.length}`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    selectedOption = null;
    scoreContainer.textContent = "";
    loadQuestions();
}

nextButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);

loadQuestions();