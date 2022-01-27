let domanda = parseInt(prompt("Inserisci un numero"));
let cubo;
alert("il numero da raggiungere è: " + domanda);

for (let i=1; i<=domanda; i++) {

    cubo = i * i * i;
    
    alert(`Il cubo di ${i} è ${cubo}`);

}


