// get necessary DOM elements
const quizQuestion = document.getElementById("quiz-question");
const answers = document.querySelectorAll(".answer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answerArray = [answer1, answer2, answer3, answer4];
const correctScore = document.getElementById("correct-score");
const incorrectScore = document.getElementById("incorrect-score");
const categoryInfo = document.getElementById("category-info");

// get the category names from data in questions.js
const categoryNames = Object.keys(data);

// variables that need to retain state between functions
let questionNumber = 0;
let isShowingCategories = true;
let correctAnswer;
let correctTotal = 0;
let incorrectTotal = 0;
let currentCategory;
let numRounds = 0;


// set the category if categories are showing, otherwise check answer
function answerBoxClicked(index) {
    //console.log(isShowingCategories);
    if (isShowingCategories === true) {
        currentCategory = index;
        categoryInfo.innerHTML = `Current Category: ${categoryNames[currentCategory]}`;
        fetchQuestionFromCategory(currentCategory);
        isShowingCategories = false;
        numRounds++;
    } else {
        submitAnswer(index);
    }
}


// Get a question from a specific category and set up the content
function fetchQuestionFromCategory(category) {
    //console.log("data = ", data);

    const questions = data[categoryNames[category]];

    //console.log("questions = ", questions);

    // Choose a random question index, expected output is between 0 to questions.length - 1
    let randomIndex = Math.floor(Math.random() * questions.length);

    //console.log("randomIndex = ", randomIndex);
    
    const randomQuestion = questions[randomIndex];
    questionNumber += 1;

    quizQuestion.innerHTML = `<h2>Question ${questionNumber}: ${randomQuestion.question}</h2>`;

    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i].innerHTML = `${randomQuestion.answers[i]}`;
    }

    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct", "incorrect");
    }

    correctAnswer = randomQuestion.correctAnswer;
}

// Check the answer, update score and get the next question
function submitAnswer(answerIndex) {
    //console.log(answers.length);

    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct", "incorrect");

        if (correctAnswer === answers[i].querySelector('p').innerHTML) {
            answers[i].classList.add("correct");
        } else {
            answers[i].classList.add("incorrect");
        }
    }

    if (answerArray[answerIndex].innerHTML === correctAnswer) {
        correctTotal++;
        correctScore.innerHTML = `Correct: ${correctTotal}`;
    } else {
        incorrectTotal++;
        incorrectScore.innerHTML = `Incorrect: ${incorrectTotal}`;
    }

    //console.log(correctAnswer);

    if (questionNumber % 10 === 0) {
        categoryChange();
    } else {
        fetchQuestionFromCategory(currentCategory);
    }
}

// Display stats and allow a category change
function categoryChange() {

    let correctPercent;
    let total = correctTotal + incorrectTotal;
    if (total === 0) {
        correctPercent = 0; // To avoid division by zero
    }
    correctPercent = (correctTotal / total) * 100;

    quizQuestion.innerHTML = `
        <h2>Pick a New Category Below <br> or Restart for a Better Score!</h2>
        <h3>You have played through ${numRounds} rounds!</h3>
        <h3>Correct Answer Rate: ${correctPercent.toFixed(2)}%</h3>
    `;

    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct", "incorrect");
    }

    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i].innerHTML = `${categoryNames[i]}`;
    }
    isShowingCategories = true;

    categoryInfo.innerHTML = `Pick A Category Above`;

}

// Reset all values back to default and show welcome text
function restartChallenge() {

}
