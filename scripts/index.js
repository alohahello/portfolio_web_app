const gameBox = document.getElementById("gameBox");
const mathBox = document.getElementById("mathBox");

function createGameBox() {
    const testElement = document.createElement("div");
    testElement.classList.add("gameBox");
    testElement.innerHTML =
        `<div> 
            <p>Game goes here.</p> 
        </div>`
    ;
    gameBox.appendChild(testElement);
    const playArea = document.createElement("div");
    playArea.classList.add("eventBox");
    playArea.innerHTML = 
        `<div>
            <p>Game is played in this box</p>
        </div>`
        ;
    testElement.appendChild(playArea);
}

function createEquationBox() {
    const equationBox = document.createElement("div");
    equationBox.classList.add("mathBox");
    equationBox.innerHTML = 
        `<div>
            <p>HELLO WORLD</p>
        </div>`
    ;
    mathBox.appendChild(equationBox);
    const numberBox = document.createElement("div");
    numberBox.classList.add("displayBox");
    numberBox.innerHTML = 
    `<div> 
    <h1>Math Game</h1>
    <h4>For Smart People</h2>
    </div>`    
    
    // `<div>
    //         <p>10 + 15 = ?</p>
    //     </div>`
    ;
    equationBox.appendChild(numberBox);
}

createGameBox();
createEquationBox();
