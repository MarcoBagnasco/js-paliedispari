/* 
    PALINDROMO
    1.Chiedere una parola all'utente
    2.Creare una funzione per capire se è palindroma
*/

var userWord = prompt('Inserisci una parola');
console.log(userWord);

if(palindrome(userWord)){
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}

//FUNCTIONS
/**
 * Valuta se una parola è palindroma
 * @param {string} word 
 * @returns valore booleano
 */
function palindrome(word){
    var reverse = '';

    for(var i = word.length - 1; i >= 0; i--){
        // console.log(word[i]); //test
        reverse += word[i];
    }
    if(reverse === word){
        return true;
    }
    return false;
}