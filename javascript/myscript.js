

/**let parolaUtente = prompt("inserire una parola palindroma");

function palindroma(parola){
    
    let invertiParola = parola.split("").reverse().join("")

    return invertiParola
}

if (parolaUtente == palindroma(parolaUtente)){

    console.log(parolaUtente + (" la parola è palindroma :D"));
}else{
    console.log(parolaUtente + (" ah ah aha, non hai detto la parola magica!"));
}*/

let utentePari = document.getElementById("pari");
let utenteDispari =document.getElementById("dispari");

function random5(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  let pcNumber = random5(1,6);

function pariDispari(number){
    if (number % 2 == 0){
        return true;
    }else {
        return false
    }
}

let numeroUtente = prompt("inserisci un numero da 1 a 5");

if (numeroUtente < 1 || numeroUtente > 5){
    alert("giochi corretto cortesemente, ora scelgo io")
    numeroUtente = console.log(random5(1,6));
}else if (numeroUtente == NaN){
    alert("i numeri sono numeri, ora scelgo io")
    numeroUtente = console.log(random5(1,6));
}

let result = pcNumber + numeroUtente;

console.log(result);

if (utentePari == true && pariDispari(result) == true || utenteDispari == false && pariDispari(result) == false){
    console.log("utente vince");
}else {
    console.log("vince il banco, mi spiace");
}