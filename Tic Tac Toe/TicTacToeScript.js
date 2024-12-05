let items = document.querySelectorAll(".item");
let resetGame = document.querySelector("#rst-btn");
let newGame = document.querySelector("#new-btn");
let msgSection = document.querySelector("section");
let msg = document.querySelector(".msg");
let heading1 = document.querySelector("#head1");
let turnX = true;
let count = 0;
const winning = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const disableItems = () => {
    heading1.style.display = "none";
    msgSection.style.display = "block";
    for(let box of items){
        box.disabled = true;
    }
};
const drawGame = () => {
    msgSection.style.display = "";
    msg.innerText = "Game Draw !";
    disableItems();
};

const checkwinner = () => {
    for(let winPattern of winning){
        let pos1 = items[winPattern[0]].innerText;
        let pos2 = items[winPattern[1]].innerText;
        let pos3 = items[winPattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                msgSection.style.display = "block";
                msg.innerHTML = `Congratulations! Winner is <bold>${pos1}</bold>`;
                disableItems();
                return true;
            }
        }
    }
};

items.forEach((item) =>{
    item.addEventListener("click", () => {
        if (turnX){
            item.innerText="X";
            turnX = false;
        }
        else{
            item.innerText = "O";
            item.style.color="#195e70";
            turnX = true;
        }

        item.disabled = true;
        count++;

        let winner = checkwinner();
        if (count === 9 && !winner)
            drawGame();
    });
});

const enableItems = () => {
    for (let item of items){
        item.disabled = false;
        item.innerText = "";
    }
    heading1.style.display = "block";
    msgSection.style.display = "none";
};

const reset = () => {
    turnX = true;
    count = 0;
    enableItems();
};

newGame.addEventListener("click", reset);
resetGame.addEventListener("click", reset);