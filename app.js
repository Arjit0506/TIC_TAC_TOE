let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#btn");
let turnO=true;//player who has chosen O for playwil give true value else return false
let newgamebtn=document.querySelector("#newgame");
let msgcon=document.querySelector(".msgcontainer");
let para=document.querySelector("#msg");
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame=() =>
{
    turnO=true;
    enableBoxes();
    msgcon.classList.add("hide");
}
boxes.forEach((box) => 
{
    box.addEventListener("click",()=>
    {
        if(turnO)//player O
        {
            box.innerText="O";
            turnO=false;
        }
        else{//player X
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })    
});
/*const draw=()=>
{
    para.innerText='The match is drawn';
    msgcon.classList.remove("hide");
}*/
const disablebtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>
{
    para.innerText=`Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebtn();
}
const checkWinner=() =>{
    for(pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;let pos2=boxes[pattern[1]].innerText;let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                showWinner(pos1);
            }
        }
    }
}
newgamebtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);