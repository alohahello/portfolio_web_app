const userAnswerElement   = document.getElementById("userAnswer");
const question            = document.getElementById("question");
const result              = document.getElementById("result");
const gameContainer       = document.getElementById("game");
gameContainer.style.display = "none";

// Global Variables
var difficulty = 1;


// EQUATION GENERATION FUNCTIONS

function genAddition(difficulty = 1)
{
    //
    // Generates a randomized addition equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    //

    const num1 = Math.floor(Math.random() * 12) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * 12) + 1;
    answer = num1 + num2;

    return [num1, num2, '+'];
}
function genSubtraction(difficulty = 1)
{
    //
    // Generates a randomized subtraction equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    // 

    const num1 = Math.floor(Math.random() * 12) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * 12) + 1;

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
function genMultiplication(difficulty = 1)
{
    // 
    // Generates a randomized multiplication equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    // 

    const num1 = Math.floor(Math.random() * 12) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * 12) + 1;
    answer = num1 * num2;

    return [num1, num2, '*'];
}
function genDivision(difficulty = 1)
{
    // 
    // Generates a randomized division equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer
    // 

    let range = 12; 
    const maxNum2 = Math.floor(range / 2); 

    const num2 = Math.floor(Math.random() * maxNum2) + 1; 
    const maxMultiplier = Math.floor(range / num2); 
    const multiplier = Math.floor(Math.random() * maxMultiplier) + 1; 
    const num1 = num2 * multiplier; 
    const answer = num1 / num2; 

    return [num1, num2, '÷'];
}


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

    // Display the result message
    result.innerText = resultMessage;
    
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
    difficulty = 1;
    runGame();
}
function setMedium()
{
    difficulty = 2;
    runGame();
}
function setHard()
{
    difficulty = 3;
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

    // Hides the difficulty options and displays the game conatiner
    document.getElementById("difficulty").style.display = "none";
    document.getElementById("game").style.display = "";

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