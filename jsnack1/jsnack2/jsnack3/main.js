let domanda;
let somma = 0;

for (let i=0; i<10; i++) {

    domanda = parseInt(prompt("Inserisci un numero"));
    console.log("il numero è: " + domanda);

    somma = parseInt(domanda) + somma;

}

console.log("La somma è " + somma);

