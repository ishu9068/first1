let boxes = Array.from(document.querySelectorAll('.box'));
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; //playerx. playero

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turno = true ;
    enableboxes();
    msgcontainer.classList.add("hide");
}
  
 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno){
        box.innerText = "o";
        turno = false;
        }else {
            box.innerText = "x";
            turno = true ;
        }
        box.disabled = true ;

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true ;
       }
    };
 const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false ;
        box.innerText = "";
     }
    };   

const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for( let pattern of winpatterns){
        
         let pos1val  = boxes[pattern[0]].innerText;
         let pos2val  = boxes[pattern[1]].innerText;
         let pos3val  = boxes[pattern[2]].innerText;
    
         if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
            }
         }

    }
}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);
