const questionContainer = document.getElementById('question-container');
const restartButton = document.getElementById('restart-button');
const scoreContainer = document.getElementById('score-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

let score = 0;
let currentQuestionIndex = 0;
let selectedOption = null;

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

function loadQuestions() {
    optionsContainer.innerHTML = "";
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

nextButton.addEventListener('click', loadQuestions);
optionButton.addEventListener('click', checkAnswer);

loadQuestions();

function selectOption(index) {
    selectedOption = index;
    if (selectedOption === currentQuestion.answer) {
        checkAnswer();
    }
}

function checkAnswer() {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    } 
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestions();
    }
    else {
        showScore();
    }
}

restartButton.addEventListener('click', restartQuiz);