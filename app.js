// Available options 
let computerOptions = ["Rock", "Paper", "Scissors"];
let playerOptions = ["Rock", "Paper", "Scissors"]; 

//random selection logic using math random number with the array of options length
let randomSelection = Math.floor(Math.random()*computerOptions.length);
let computerSelection = computerOptions[randomSelection];

//console log to check random number if it's matching the computerSelection
console.log(randomSelection);
console.log(computerSelection);