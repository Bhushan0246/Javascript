let userScore = 0, compScore = 0;
let options = document.querySelectorAll(".option");
let msg = document.querySelector(".winner");
let usrScore = document.querySelector(".user-score");
let cmpScore = document.querySelector(".comp-score");
const genCompChoice = () => {
    const arr = ["rock", "paper", "scissor"];
    const randChoice =  Math.floor(Math.random()*3);
    return arr[randChoice]; //arr[0] or arr[1] or arr[2]
};

const showWinner = (userWin) => {
    if(userWin){
        msg.innerHTML = "Congrats! You won :)";
        userScore++;
        usrScore.innerText = userScore;
        msg.style.backgroundColor = "#18804f";
    }
    else{
        msg.innerHTML = "You lose, Computer Won";
        compScore++;
        cmpScore.innerText = compScore;
        msg.style.backgroundColor = "#B52106";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        msg.innerHTML = "It's a Draw";
        msg.style.backgroundColor = "rgba(4, 0, 56, 0.8)";
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "rock" ? true : false;
        }
        else{
            userwin = compChoice === "paper" ? true : false;
        }
        showWinner(userwin);
    }
};

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});