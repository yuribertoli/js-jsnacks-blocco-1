let domanda = parseInt(prompt("Inserisci un numero"));
let cubo;
console.log("il numero da raggiungere è: " + domanda);

for (let i=1; i<=domanda; i++) {

    cubo = i * i * i;
    
    console.log(`Il cubo di ${i} è ${cubo}`);

}


