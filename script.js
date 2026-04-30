const questionContainer = document.getElementById('question-container');
const restartButton = document.getElementById('restart-button');
const scoreContainer = document.getElementById('score-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const questionText = document.getElementById('question-text');

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
    nextButton.style.display = "none";

    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;

        button.addEventListener('click', () => {
            if (selectedOption !== null)
                return;
            selectedOption = index;
            const allButtons = optionsContainer.querySelectorAll('button');
            allButtons.forEach(btn => btn.disabled = true);
            if (index === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
                allButtons[currentQuestion.answer].classList.add('correct');
            }
            nextButton.style.display = "block";
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
    document.getElementById("quiz-container").style.display = "none";
    scoreContainer.classList.remove("hidden");
    document.getElementById("score").textContent = `Your final score is ${score} out of ${quizData.length}.`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    selectedOption = null;
    scoreContainer.classList.add("hidden");
    loadQuestions();
    document.getElementById("quiz-container").style.display = "block";
}

nextButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);

loadQuestions();