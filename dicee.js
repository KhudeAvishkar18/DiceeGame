// creating 1st random number
let num1 = Math.random();
num1 = num1 * 6;
num1 = Math.floor(num1);
num1 = num1 + 1;
console.log(num1);

// creating 2nd random number

let num2 = Math.random();
num2 = num2 * 6;
num2 = Math.floor(num2);
num2 = num2 + 1;
console.log(num2);


// changing player1 image

if(num1 === 1){
    document.querySelector(".player1").setAttribute("src", "media/one.jpeg");
}
else if(num1 === 2){
    document.querySelector(".player1").setAttribute("src", "media/two.jpeg");
}
else if(num1 === 3){
    document.querySelector(".player1").setAttribute("src", "media/three.jpeg");
}
else if(num1 === 4){
    document.querySelector(".player1").setAttribute("src", "media/four.jpeg");
}
else if(num1 === 5){
    document.querySelector(".player1").setAttribute("src", "media/five.jpeg");
}
else{
    document.querySelector(".player1").setAttribute("src", "media/six.jpeg");
}



// changing player2 image

if(num2 === 1){
    document.querySelector(".player2").setAttribute("src", "media/one.jpeg");
}
else if(num2 === 2){
    document.querySelector(".player2").setAttribute("src", "media/two.jpeg");
}
else if(num2 === 3){
    document.querySelector(".player2").setAttribute("src", "media/three.jpeg");
}
else if(num2 === 4){
    document.querySelector(".player2").setAttribute("src", "media/four.jpeg");
}
else if(num2 === 5){
    document.querySelector(".player2").setAttribute("src", "media/five.jpeg");
}
else{
    document.querySelector(".player2").setAttribute("src", "media/six.jpeg");
}



// checking the maximum number

if(num1 > num2){
    document.querySelector(".wins").textContent = "Player 1 wins"
}
else if(num1 === num2){
    document.querySelector(".wins").textContent = "Draw";
}
else{
    document.querySelector(".wins").textContent = "Player 2 wins";
}



