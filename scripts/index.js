const userAnswerElement   = document.getElementById("userAnswer");
const question            = document.getElementById("question");
const result              = document.getElementById("result");
const gameContainer       = document.getElementById("game");
const scoreElement        = document.getElementById("score");

gameContainer.style.display = "none";

// Global Variables
var difficulty = 12;
var score = 0;

// Displays score as 0 before the game starts
scoreElement.innerText = "Score: " + score;


// EQUATION GENERATION FUNCTIONS

function genAddition()
{
    //
    // Generates a randomized addition equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    //

    const range = difficulty;
    const num1 = Math.floor(Math.random() * range) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * range) + 1;
    answer = num1 + num2;

    return [num1, num2, '+'];
}
function genSubtraction()
{
    //
    // Generates a randomized subtraction equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    // 

    const range = difficulty;
    const num1 = Math.floor(Math.random() * range) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * range) + 1;

    if (num1 > num2)
    {
        answer = num1 - num2;
        return [num1, num2, '-'];
    }
    else
    {
        answer = num2 - num1;
        return [num2, num1, '-'];
    }
}
function genMultiplication()
{
    // 
    // Generates a randomized multiplication equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    // 

    const range = difficulty;
    const num1 = Math.floor(Math.random() * range) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * range) + 1;
    answer = num1 * num2;

    return [num1, num2, '*'];
}
function genDivision()
{
    // 
    // Generates a randomized division equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    // 

    const range = difficulty; 
    const maxNum2 = Math.floor(range / 2); 

    const num2 = Math.floor(Math.random() * maxNum2) + 1; 
    const maxMultiplier = Math.floor(range / num2); 
    const multiplier = Math.floor(Math.random() * maxMultiplier) + 1; 
    const num1 = num2 * multiplier; 
    const answer = num1 / num2; 

    return [num1, num2, '÷'];
}

// Add event listener to input element for "Enter" key press
userAnswerElement.addEventListener("keypress", function(event) {
    // Check if the key pressed is "Enter" (key code 13)
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// Add event listener to the document for "Enter" key press
document.addEventListener("keypress", function(event) {
    // Check if the key pressed is "Enter" (key code 13)
    if (event.key === "Enter") {
        checkAnswer();
    }
});


// UPDATE HTML FUNCTIONS

function checkAnswer() {
    //
    // Retrieves the user's input value and compares it to the correct answer
    // Called by a button
    //

    // Fetch the question element again from the DOM
    const question = document.getElementById("question");
    // Fetch the string of the question element
    const questionText = question.innerText;
    const questionList = questionText.split(" ");
    // Gets num1 and num2 by index and converts string to int
    const num1 = parseInt(questionList[0]);
    const num2 = parseInt(questionList[2]);

    // Fetch the userAnswerElement again from the DOM
    const userAnswerElement = document.getElementById("userAnswer");
    // Retrieve the value from the input element
    let userAnswer = userAnswerElement.value;
    // Convert the user's answer to a number
    userAnswer = parseInt(userAnswer);

    // Fetch the type of equation
    const eqtype = question.dataset.eqType;
    let resultMessage;

    switch(eqtype)
    {
        case 'addition':
            // Check if the user's answer matches the correct answer
            resultMessage = userAnswer === num1 + num2 ? 'Correct!' : 'Incorrect. Try again.';
            break;
        case 'subtraction':
            // Check if the user's answer matches the correct answer
            resultMessage = userAnswer === num1 - num2 ? 'Correct!' : 'Incorrect. Try again.';
            break;
        case 'multiplication':
            // Check if the user's answer matches the correct answer
            resultMessage = userAnswer === num1 * num2 ? 'Correct!' : 'Incorrect. Try again.';
            break;
        case 'division':
            // Check if the user's answer matches the correct answer
            resultMessage = userAnswer === num1 / num2 ? 'Correct!' : 'Incorrect. Try again.';
            break;
    }

    // Apply styles based on the result
    if (resultMessage === 'Correct!') {
        userAnswerElement.style.color = 'green'; // Change color to green for correct answer
    } else {
        userAnswerElement.style.color = 'red'; // Change color to red for incorrect answer
    }

    // Display the result message
    result.innerText = resultMessage;

    if (resultMessage == 'Correct!') 
    {
        score++; // Increment score if answer is correct
        result.innerText = resultMessage;
        scoreElement.innerText = "Score: " + score;
    } 
    
    else 
    {
        result.innerText = resultMessage;
    }
    
    // Loops the program when the answer is correct
    if (resultMessage == 'Correct!')
    {
        runGame();
    }

}
function updateQuestion(num1, num2, symbol)
{
    // 
    // Updates the HTML to show a new equation provided
    // from the passed parameters.
    // 

    question.innerHTML = `${num1} ${symbol} ${num2} = <input type='text' id='userAnswer' required>`;

    // Updates the question dataset to rememeber the type of equation via string
    switch(symbol)
    {
        case '+':
            question.dataset.eqType = "addition";
            break;
        case '-':
            question.dataset.eqType = "subtraction";
            break;
        case '*':
            question.dataset.eqType = "multiplication";
            break;
        case '÷':
            question.dataset.eqType = "division";
            break;
    }
}




// SET DIFFICULTY BUTTON FUNCTIONS

function setEasy() 
{
    difficulty = 12;
     // Hides the difficulty options and displays the game conatiner
     document.getElementById("difficulty").style.display = "none";
     document.getElementById("game").style.display = ""; 
    runGame();
}
function setMedium()
{
    difficulty = 15;
     // Hides the difficulty options and displays the game conatiner
     document.getElementById("difficulty").style.display = "none";
     document.getElementById("game").style.display = ""; 
    runGame();
}
function setHard()
{
    difficulty = 20;
     // Hides the difficulty options and displays the game conatiner
     document.getElementById("difficulty").style.display = "none";
     document.getElementById("game").style.display = "";

    runGame();
}

// GAME LOGIC

function runGame()
{
    // 
    // Runs the logic of the page.
    // Loops through to randomly choose a type of question to generate, then 
    // displays the question until a correct answer is submitted.
    // 

   
    // Generates random number between 1-4
    const gen = Math.floor(Math.random() * 4) + 1;

    // Initiate and have a default value for equation
    let equation = [0,0,'error'];
    switch (gen)
    {
        case 1:
            // Addition
            equation = genAddition();
            break;
        case 2:
            // Subtraction
            equation = genSubtraction();
            break;
        case 3:
            // Multiplication
            equation = genMultiplication();
            break;
        case 4:
            // Division
            equation = genDivision();
            break;
    }

    num1    = equation[0];
    num2    = equation[1];
    symbol  = equation[2];

    // Updates HTML to display new equation
    // -1 + -1 IS DEFAULT HTML EQUATION IF THIS FAILS
    updateQuestion(num1, num2, symbol);
}
