/* 
    PALINDROMO
    1.Chiedere una parola all'utente
    2.Creare una funzione per capire se è palindroma
*/

// var userWord = prompt('Inserisci una parola');
// console.log(userWord);

// if(palindrome(userWord)){
//     console.log('La parola inserita è palindroma');
// } else {
//     console.log('La parola inserita non è palindroma');
// }

// //FUNCTIONS
// /**
//  * Valuta se una parola è palindroma
//  * @param {string} word 
//  * @returns valore booleano
//  */
// function palindrome(word){
//     var reverse = '';

//     for(var i = word.length - 1; i >= 0; i--){
//         // console.log(word[i]); //test
//         reverse += word[i];
//     }
//     if(reverse === word){
//         return true;
//     }
//     return false;
// }


/* 
    PARI E DISPARI
    1.L'utente sceglie pari o dispari
    2.L'utente inserisce un numero da 1 a 5
    3.Generare un numero random per il computer
    4.Somma dei due numeri
    5.Valutare se la somma è pari o dispari
    6.Stabilire chi ha vinto
*/
var choice;
do{
    choice = prompt('Pari o Dispari?').toLowerCase().trim();
} while(choice !== 'pari' && choice !== 'dispari');
console.log(choice); //test

var userNumber;
do{
    userNumber = parseInt(prompt('Scegli un numero da 1 a 5').trim());
} while(isNaN(userNumber) || !(userNumber >= 1 && userNumber <= 5));
console.log(userNumber); //test