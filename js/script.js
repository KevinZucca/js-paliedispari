const palindromContainerEl = document.getElementById("palindrome-container");
const palindromeTextEl = document.getElementById("palindrome-text");
const palindromeButtonEl = document.getElementById("palindrome-button");


palindromeButtonEl.addEventListener("click", function(){
    let palindromeResult = document.createElement("h2");
    palindromContainerEl.append(palindromeResult);
    palindromeResult.innerHTML = palindrome(word);
});


let userWord = prompt("inserisci una parola");

function palindrome (word) {
    
   if (word == word.split("").reverse("").join("")) {
    console.log(word + " è un palindromo") 
   } else {
    console.log(word + " non è un palindromo")
   }
}

palindrome(userWord);



// PARI O DISPARI
//dichiaro una variabile per permettere all'utente di inserire pari o dispari come stringa e la salvo
// let evenOrOdd = prompt("Scegli pari o dispari?");

//se l'utente sceglie pari o dispari si memorizza la variabile con il nuovo valore
if (evenOrOdd == "pari") {
    evenOrOdd = "pari";
} else if (evenOrOdd == "dispari") {
    evenOrOdd = "dispari" 
}
console.log ("Hai scelto: " + evenOrOdd)



//dichiaro una variabile per il numero scelto dall'utente
let userNumber;

//l'utente inserisce un numero da 1 a 5
do {
//   userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
//finchè il numero non è da 1 a 5 o non è un numero il ciclo si ripete
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

console.log("Hai scelto: " + userNumber);



//dichiaro una variabile per il numero del bot che verrà preso dalla funzione
let botNumber = randomGenerate();
console.log("Il computer ha scelto: " + botNumber)

//dichiaro una variabile per la somma che verrà presa dal calcolo della scelta dell'utente più
//il numero casuale del bot
let sum =  userNumber + botNumber;
console.log("La somma è: " + sum)


// grazie alla funzione whoStheWinner salvo in una variabile il valore pari o dispari del risultato
let finalRound = whoStheWinner(userNumber, botNumber, sum)
console.log("Il totale è: " + finalRound)


//dichiaro una variabile che conterrà il messaggio finale
let finalWinner;

//se l utente ha scelto pari ed il risultato della somma è pari ha vinto. stessa cosa per dispari
if (evenOrOdd == "pari" && finalRound == "pari" || evenOrOdd == "dispari" && finalRound == "dispari") {
    finalWinner = "Hai vinto la scommessa!";
//altrimenti la vittoria è del bot
} else {
    finalWinner = "Ha vinto il computer";
}
console.log(finalWinner);





//funzione per generare un numero random per il pc. dichiaro una variabile all'interno per memorizzare
//il numero e uso return per utilizzare in scope globale
function randomGenerate (number) {
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}

//funzione per dichiarare se il risultato è pari o dispari in base ad un numero1,  numero2 e un totale
function whoStheWinner (number1, number2, total) {
    if ((number1 + number2) % 2 == 0 ) {
        total = "pari";
    }else {
        total = "dispari";
    }
    return total;
    }
    








