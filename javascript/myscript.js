

let parolaUtente = prompt("inserire una parola palindroma");

function palindroma(parola){
    
    let invertiParola = parola.split("").reverse().join("")

    return invertiParola
}

if (parolaUtente == palindroma(parolaUtente)){

    console.log(parolaUtente + (" la parola è palindroma :D"));
}else{
    console.log(parolaUtente + (" ah ah aha, non hai detto la parola magica!"));
}