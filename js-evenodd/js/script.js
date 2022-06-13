// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let computerNumber = randomNumber();
let userNumber = parseInt(prompt("inserisci un numero"));
let userChoice = prompt("pari o dispari");
let output= EvenorOdd(computerNumber, userNumber,userChoice)
// output
console.log(output);
console.log(userNumber, computerNumber, userChoice)
// funzione che controlla se la somma dei numeri è pari oppure dispari
function EvenorOdd(computerNumber, userNumber, userChoice){
    let sum = computerNumber + userNumber;
    let evenorOdd;
    // controllo che sum e la scelta siano vincenti oppure perdenti
    if(sum % 2 === 0 && userChoice === "pari" || sum % 2 != 0 && userChoice === "dispari"){
        evenorOdd = "you won";
    }else{
        evenorOdd = "you lost";
    }
    return evenorOdd;
}
// funzione che genera un numero casuale per il computer
function randomNumber(){
    // genero il numero casualmente
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}