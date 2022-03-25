function changeDiv(){
    document.getElementById("container-newgame").style.display = "none";
    document.getElementById("game-window").style.display = "flex";
}

const buttonNewGame = document.querySelector("#new-game");
buttonNewGame.addEventListener("click", () => {
    changeDiv();
});

const playerOptions = document.querySelectorAll(".poptions");
let counter = 0;
let counterComputer = 0;
let roundCounter = 0;
let conclusion;
let playerSelection;
let computerSelection;

playerOptions.forEach((option) => {
    option.addEventListener("click", function () {
        if(option.classList.contains("rockBtn")){
            playerSelection = "Rock";
        } else if(option.classList.contains("paperBtn")){
            playerSelection = "Paper"
        } else {
            playerSelection = "Scissors"
        }
        const computerOptions = ["Rock", "Paper", "Scissors"];
        computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        compareChoices(playerSelection, computerSelection);
        gameConclusion();
        updateScore();
        changeComputerColor();
        generate_table();
        openModal();
    })
    
});

function openModal(){
    if(counter === 5 || counterComputer === 5){
        const modal = document.getElementById("new-game-modal");
        const modalOverlay = document.getElementById("modal-overlay");
        const modalBtn = document.getElementById("new-game-modal-btn");
        modal.classList.add("active");
        modalOverlay.classList.add("active");
        modalBtn.addEventListener("click", () =>{
            modal.classList.remove("active");
            modalOverlay.classList.remove("active");
            resetScore();
        })
        if(counter === 5){
            document.getElementById("new-game-modal-result").textContent = "You win!";
            document.getElementById("new-game-modal").style.background = "#35595d";
            document.getElementById("new-game-modal-btn").style.background = "#00a9c2";
        } else if(counterComputer === 5){
            document.getElementById("new-game-modal-result").textContent = "You lost!";
            document.getElementById("new-game-modal").style.background = "#b94a4a";
            document.getElementById("new-game-modal-btn").style.background = "#3b3b3b";
        }
    }
}

function resetScore(){
    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
}

function updateScore(){
    document.getElementById("player-score").textContent = counter;
    document.getElementById("computer-score").textContent = counterComputer;
}

function gameConclusion(){
    if(conclusion === "win"){
        counter++;
    } else if(conclusion === "lose"){
        counterComputer++;
    }
};

function changeComputerColor(){
    if(computerSelection === "Rock"){
        document.getElementById("computer-rock").style.cssText = `background-color: #374046; transition: background-color 0.5s ease;`;
        setTimeout(function(){
            document.getElementById("computer-rock").style.cssText = `background-color: b94a4a; transition: background-color 0.5s ease;`;
        }, 1000)       
    }else if(computerSelection ==="Paper"){
        document.getElementById("computer-paper").style.cssText = `background-color: #374046; transition: background-color 0.5s ease;`;
        setTimeout(function(){
            document.getElementById("computer-paper").style.cssText = `background-color: b94a4a; transition: background-color 0.5s ease;`;
        }, 1000)
    }else if(computerSelection === "Scissors"){
        document.getElementById("computer-scissors").style.cssText = `background-color: #374046; transition: background-color 0.5s ease;`;
        setTimeout(function(){
        document.getElementById("computer-scissors").style.cssText = `background-color: b94a4a; transition: background-color 0.5s ease;`;    
        }, 1000)
    }
}

function compareChoices(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        conclusion = "draw";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        conclusion = "win";       
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        conclusion = "win";
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        conclusion = "win";
    } else {
        conclusion = "lose";
    }
    roundCounter++;
    if(counter == 5){
        counter = 0;
        counterComputer = 0;
    } else if(counterComputer == 5){ 
        counter = 0;
        counterComputer = 0;
    }
};

/* Table that contains round info starts here, needs rework*/

let body = document.getElementById("game-table");
let tbl = document.createElement("table");
tbl.style = "background:#f2f0df;"
let tblBody = document.createElement("tbody");
let tblHead = document.createElement("thead");
tblHead.classList.add("table-head-sticky");
let tblFirstRow = document.createElement("tr");
let tblFirstRowDataRound = document.createElement("td")
tblFirstRowDataRound.textContent = "Round";
let tblFirstRowDataPlayer = document.createElement("td");
tblFirstRowDataPlayer.textContent = "Player";
let tblFirstRowDataComputer = document.createElement("td");
tblFirstRowDataComputer.textContent = "Computer";
let tblFirstRowDataResult = document.createElement("td");
tblFirstRowDataResult.textContent = "Result";

function generate_table (){
    for (let i = 0; i < 1; i++){
        let row = document.createElement("tr");
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(roundCounter);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(playerSelection);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(computerSelection);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(conclusion);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
   
        tblBody.appendChild(row);
        
    }     if(counter === 5){
            row = document.createElement("tr");
            for(let i = 0; i < 4; i++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode("You win!");
            row.style = "background: green"
            cell.appendChild(cellText);
            row.appendChild(cell);
            roundCounter = 0;
            tblBody.appendChild(row);
        }
            
        } else if(counterComputer === 5){
            row = document.createElement("tr");
            for(let i = 0; i < 4; i++){
                let cell = document.createElement("td");
                let cellText = document.createTextNode("You lost!");
                row.style = "background: red"
                cell.appendChild(cellText);
                row.appendChild(cell);
                roundCounter = 0;
                tblBody.appendChild(row);
            }
        }
    document.getElementById("game-table").scrollTop = 10000;
    tbl.appendChild(tblHead);
    tblHead.appendChild(tblFirstRow);
    tblFirstRow.appendChild(tblFirstRowDataRound);
    tblFirstRow.appendChild(tblFirstRowDataPlayer);
    tblFirstRow.appendChild(tblFirstRowDataComputer);
    tblFirstRow.appendChild(tblFirstRowDataResult);
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}

/* Table that contains round info ends here */
