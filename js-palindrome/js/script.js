// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let userWord = prompt("inserisci una parola");
// funzione che controlla se la parola è palindromo
function palindrome(userWord){
    let userFlag = true;
    // tolgo dalla parola che mi ha dato l'utente tutta la punteggiatura
    userWord = userWord.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/g,"")
    userWord = userWord.replace(/\s/g, '')
    for(let i = 0; i < userWord.length; i++){
        // a userCounter assegno il contrario della parola
        let userCounter = (userWord.length - 1) - i;
        console.log(userWord[i], userWord[userCounter]);
        // controllo che ogni lettera sia uguale alla lettera corrispondente del contrario della parola
        if(userWord[i].toLowerCase() !== userWord[userCounter].toLowerCase()){
            userFlag = false;
        }
    }
    return userFlag;
}
// output
let userOutput = palindrome(userWord);
console.log(userOutput);