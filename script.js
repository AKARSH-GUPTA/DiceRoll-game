function diceRoll(){
var player1;
player1=Math.floor((Math.random()*6)+1);
var player2;
player2=Math.floor((Math.random()*6)+1);
if(player1>player2)
{
    document.querySelector(".freckle").textContent="";
    document.querySelector(".flex-row img").setAttribute("src","./images/dice" + player1 + ".png");
    document.querySelectorAll(".flex-row img")[1].setAttribute("src","./images/dice" + player2 + ".png");
    document.querySelector(".flex-row h2").textContent="👑PLAYER 1👑";    
    document.querySelectorAll(".flex-row h2")[1].textContent="😢PLAYER 2😢";    
}
else if(player2>player1){
    document.querySelector(".freckle").textContent="";
    document.querySelector(".flex-row h2").textContent="😢PLAYER 1😢";    
    document.querySelectorAll(".flex-row h2")[1].textContent="👑PLAYER 2👑";    
    document.querySelector(".flex-row img").setAttribute("src","./images/dice" + player1 + ".png");
    document.querySelectorAll(".flex-row img")[1].setAttribute("src","./images/dice" + player2 + ".png");
}
else{
    document.querySelector(".freckle").textContent="= Draw =";
    document.querySelector(".flex-row h2").textContent="🤔PLAYER 1😢";    
    document.querySelectorAll(".flex-row h2")[1].textContent="🤔PLAYER 2😢";    
    document.querySelector(".flex-row img").setAttribute("src","./images/dice" + player1 + ".png");
    document.querySelectorAll(".flex-row img")[1].setAttribute("src","./images/dice" + player2 + ".png");
}
}








