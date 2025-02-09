// Reverting to the last working script and adding the final message correctly

const questions = [
    "Do you like surprises?",
    "Will you be my Valentine?",
    "Do you believe in love at first sight?",
    "Would you go on a starry night date?",
    "Are you excited for Valentine's Day?"
];

let currentQuestionIndex = 0;
const questionBox = document.getElementById("question-box");
const buttonsContainer = document.getElementById("buttons-container");

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionBox.innerHTML = `<h1>${questions[currentQuestionIndex]}</h1>`;
        buttonsContainer.innerHTML = `
            <button onclick="handleAnswer('yes')">Yes</button>
            <button onclick="handleAnswer('no')">No</button>
        `;
    } else {
        showFinalMessage();
    }
}

function handleAnswer(answer) {
    if (answer === 'no') {
        questionBox.innerHTML = `<h1>Do you want to see me sad?</h1>`;
        buttonsContainer.innerHTML = `
            <button onclick="continueQuestions()">No</button>
            <button onclick="continueQuestions()">Yes</button>
        `;
    } else {
        continueQuestions();
    }
}

function continueQuestions() {
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();

function showFinalMessage() {
    questionBox.innerHTML = "<h1 style='font-size: 2em; text-align: center;'>See you on Valentine, My Valentine!</h1>";
    buttonsContainer.innerHTML = "";
    
    setTimeout(() => {
        questionBox.innerHTML = "<h1 style='font-size: 2em; text-align: center;'>Now that you have said yes for all, I'm considering yes for this toooo</h1>";
        buttonsContainer.innerHTML = `
            <div style='text-align: center; margin-top: 20px;'>
                <a href='https://shorturl.at/xCi3o' target='_blank'>
                    <img src='https://m.media-amazon.com/images/I/61VZgKcLUqL._AC_SX679_.jpg' alt='PS5' style='width: 300px; height: auto;'>
                </a>
            </div>
        `;
    }, 3000); 
}
