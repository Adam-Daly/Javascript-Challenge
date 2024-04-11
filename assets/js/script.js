// get necessary DOM elements
const categoryInfo = document.getElementById("category-info");

// get the category names from data in questions.js
const categoryNames = Object.keys(data);

// variables that need to retain state between functions
let isShowingCategories = true;
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
    console.log(category);
}

// Check the answer, update score and get the next question
function submitAnswer(answerIndex) {
    console.log(answerIndex);
}

// Display stats and allow a category change
function categoryChange() {

}

// Reset all values back to default and show welcome text
function restartChallenge() {

}
