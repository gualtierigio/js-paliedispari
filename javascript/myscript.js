

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

function random5(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  let pcNumber = random5(1,6);

console.log(pcNumber);

function pariDispari(number){
    if (number % 2 == 0){
        return true;
    }else {
        return false
    }
}

