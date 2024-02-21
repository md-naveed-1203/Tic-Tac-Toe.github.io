let boxes = document.querySelectorAll('.box');
let resetB = document.querySelector('.resetBtn');
let winContainer = document.querySelector('.winnerContainer');
let showWin = document.querySelector('.showWin');
let newG = document.querySelector('.newBtn');
let resetGameBtn = document.querySelector('.resetBtn ');


let turnO = true;

let winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

console.log(winnings);

const resetG = () => {
    turnO = true;
    enableBoxes();

    winContainer.classList.add("hide");
    newG.classList.add("hide");

    // resetB.innerText = "New Game";

}

const disabledBoxes = () => {
    for (let btn of boxes) {
        btn.disabled = true;
    }
}
const enableBoxes = () => {
    for (let btn of boxes) {
        btn.disabled = false;
        btn.innerText = "";
    }
}
const showWinner = (winner) => { //this is prmeter 
    showWin.innerText = `The winner is : ${winner}`;
    winContainer.classList.remove("hide");
    
    
    disabledBoxes();



}

const checkWinner = () => {
    for (let pattern of winnings) {

        // console.log(pattern); // this prints the winnings arrays one by one

        // console.log(pattern[0], pattern[1], pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner is :", pos1Val);
                showWinner(pos1Val);
            }
        }


    }


}





boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turnO) {
            box.innerText = "O";


            turnO = false;



        } else {
            box.innerText = "X";

            turnO = true;


        }

        box.style.color = "black";
        box.disabled = true;
        checkWinner();



    });
});
resetGameBtn.addEventListener("click", resetG);