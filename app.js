let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                
            }
        }
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
})
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);