var doc = document.querySelector("button");

doc.addEventListener('click', ()=>{
    location.reload();
})

var randomImage1 = Math.floor(Math.random()*6)+1;
var randomImage2 = Math.floor(Math.random()*6)+1;
console.log("images"+randomImage1)
var elemnt1 = document.getElementsByTagName("img")[0];
var elemnt2 = document.getElementsByTagName("img")[1];

var source = "images/dice";
elemnt1.setAttribute("src", source+randomImage1+".png");
elemnt2.setAttribute("src", source+randomImage2+".png");

if(randomImage1 > randomImage2)
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
else if(randomImage1 < randomImage2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins"
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw! Play Again"
}