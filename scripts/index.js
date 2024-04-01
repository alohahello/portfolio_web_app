const gameBox           =  document.getElementById("gameBox");
const mathBox           =  document.getElementById("mathBox");
const userAnswerElement =  document.getElementById("userAnswer");
const question          =  document.getElementById("question");
const result            =  document.getElementById("result");


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
    answer = num1 - num2;

    return [num1, num2, '-'];
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

    const num1 = Math.floor(Math.random() * 12) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * 12) + 1;
    answer = num1 / num2;

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
    // Gets num1 and num2 by index and converts string to int
    const num1 = parseInt(questionText[0]);
    const num2 = parseInt(questionText[4]);


    // Fetch the userAnswerElement again from the DOM
    const userAnswerElement = document.getElementById("userAnswer");
    // Retrieve the value from the input element
    let userAnswer = userAnswerElement.value;
    // Convert the user's answer to a number
    userAnswer = parseInt(userAnswer);


    // Fetch the type of equation
    const symbol = questionText[2];
    switch(symbol)
    {
        case '+':
            // Check if the user's answer matches the correct answer
            resultMessage = userAnswer === num1 + num2 ? 'Correct!' : 'Incorrect. Try again.';
            break;
        case '-':
            // Check if the user's answer matches the correct answer
            resultMessage = userAnswer === num1 - num2 ? 'Correct!' : 'Incorrect. Try again.';
            break;
        case '*':
            // Check if the user's answer matches the correct answer
            resultMessage = userAnswer === num1 * num2 ? 'Correct!' : 'Incorrect. Try again.';
            break;
        case '÷':
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
}




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

// MAIN FUNCTION

function main()
{
    //
    // Will show and hide the different divs, will also call the runGame() function
    //


    
}


main();