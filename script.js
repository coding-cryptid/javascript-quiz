const questionContainer = document.getElementById('question-container');
const restartButton = document.getElementById('restart-button');
const scoreContainer = document.getElementById('score-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

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

function loadQuestions() {
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click',() => selectOption(index));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer() {
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestions();
    } else {
        showScore();
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart Quiz';
        restartButton.addEventListener('click', restartQuiz);
        scoreContainer.appendChild(restartButton);
    }
}

nextButton.addEventListener('click', loadQuestions);
optionButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);
