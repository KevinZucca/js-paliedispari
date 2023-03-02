
let userWord = prompt("inserisci una parola");

function palindrome (word) {
    
   if (word == word.split("").reverse("").join("")) {
    console.log(word + " è un palindromo") 
   } else {
    console.log(word + " non è un palindromo")
   }
}

palindrome(userWord);



