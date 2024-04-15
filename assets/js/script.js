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
const mascot = document.getElementById("mascot-image");

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
let seenQuestions = [];

// Get a question from a specific category and set up the content
function fetchQuestionFromCategory(category) {

    // Get the category from data in questions.js
    const questions = data[categoryNames[category]];

    let randomIndex;

    // Choose a random question and make sure we havent seen it yet
    do {
        // Choose a random question index, expected output is between 0 to questions.length - 1
        randomIndex = Math.floor(Math.random() * questions.length);
    }
    while (seenQuestions.includes(randomIndex));

    seenQuestions.push(randomIndex);
    
    // Get the random question and increment questionNumber
    const randomQuestion = questions[randomIndex];
    questionNumber += 1;
    
    // Display the random question in the HTML
    quizQuestion.innerHTML = `<h2>Question ${questionNumber}: ${randomQuestion.question}</h2>`;

    // Populate the answers
    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i].innerHTML = `${randomQuestion.answers[i]}`;
    }

    // Remove any correctness classes
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct", "incorrect");
    }

    // set correct answer for answer validating
    correctAnswer = randomQuestion.correctAnswer;

    //set mascot image to neutral
    mascot.src = "assets/images/mascot-neutral.png";

}

// Check the answer, update score and get the next question
function submitAnswer(answerIndex) {

    for (let i = 0; i < answers.length; i++) {
        // Remove existing correctness classes
        answers[i].classList.remove("correct", "incorrect");

        // Add the appropriate correctness class
        if (correctAnswer === answers[i].querySelector('p').innerHTML) {
            answers[i].classList.add("correct");
        } else {
            answers[i].classList.add("incorrect");
        }
    }

    // Increment relevant total, update score text, update mascot 
    if (answerArray[answerIndex].innerHTML === correctAnswer) {
        correctTotal++;
        correctScore.innerHTML = `Correct: ${correctTotal}`;
        mascot.src = "assets/images/mascot-correct.png";
    } else {
        incorrectTotal++;
        incorrectScore.innerHTML = `Incorrect: ${incorrectTotal}`;
        mascot.src = "assets/images/mascot-incorrect.png";
    }

    // remove onclick attribute to prevent spam clicking during wait
    for (let i = 0; i < answers.length; i++) {
        answers[i].removeAttribute("onclick");
    }

    // wait for 2 seconds to show correct answer and mascot reaction
    // then enable clicking again
    sleep(500)
        .then(() => {
            if (questionNumber % 10 === 0) {
                categoryChange();
            } else {
                fetchQuestionFromCategory(currentCategory);
            }
        })
        .then(() => {    
            for (let i = 0; i < answers.length; i++) {
                answers[i].setAttribute("onclick", "answerBoxClicked(" + i + ")");
            }
        });

}

// set the category if categories are showing, otherwise check answer
function answerBoxClicked(index) {
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

// Display stats and allow a category change
function categoryChange() {

    // Calculate correct answer percentage
    let correctPercent;
    let total = correctTotal + incorrectTotal;
    if (total === 0) {
        correctPercent = 0; // To avoid division by zero
    }
    correctPercent = (correctTotal / total) * 100;

    // Show some stats between rounds
    quizQuestion.innerHTML = `
        <h2>Pick a New Category Below <br> or Restart for a Better Score!</h2>
        <h3>You have played through ${numRounds} rounds!</h3>
        <h3>Correct Answer Rate: ${correctPercent.toFixed(2)}%</h3>
    `;

    // Remove existing correctness classes
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct", "incorrect");
    }

    // Add category names
    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i].innerHTML = `${categoryNames[i]}`;
    }
    isShowingCategories = true;

    // Reset category info
    categoryInfo.innerHTML = `Pick A Category Above`;

    // Reset seen questions
    seenQuestions = [];

    // Change mascot to between round image
    mascot.src = "assets/images/mascot-inbetween-rounds.png";


}

// Reset all values back to default and show welcome text
function restartChallenge() {

    // Add default welcome text
    quizQuestion.innerHTML = `
        <h2>Welcome to <br>Javascript Challenge!</h2>
        <h3>Choose a category below to get your first round of 10 questions:</h3>
    `;

    // Remove existing correctness classes
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct", "incorrect");
    }

    // Add category names
    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i].innerHTML = `${categoryNames[i]}`;
    }
    isShowingCategories = true;

    // Reset Scores back to 0
    correctTotal= 0;
    incorrectTotal = 0;
    correctScore.innerHTML = `Correct: ${correctTotal}`;
    incorrectScore.innerHTML = `Incorrect: ${incorrectTotal}`;

    // Reset category info
    categoryInfo.innerHTML = `Pick A Category Above`;

    // Reset question number
    questionNumber = 0;

    // Reset rounds number
    numRounds = 0;

    // Set mascot image back to welcome
    mascot.src = "assets/images/mascot-welcome.png";

}

// function to wait for specificed amount, in milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }