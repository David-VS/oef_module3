/*Schrijf een lus dat alle even getallen tussen 1 en 20 afprint.   V
    - lus van 1 tot 20   V
    - enkel even getallen tonen    V
*/

/*
    keyword (conditie/invoer/hoe ge het gaat){
        //blok code die moet uitvoeren
    }
*/

let getal = 1;
while(getal <= 20){
    if(getal % 2 == 0){
        console.log(getal);
    }
    getal ++ ; // korter voor getal = getal + 1
}

//of alternatief, enkel veelvouden van 2 loopen
for(let getal = 2; getal <= 20; getal+=2){
        console.log(getal);
}



/* overlopen van een vaste reeks 
let stap = 1                //start variabele
let eindwaarde = 20
while(stap <= eindwaarde){  //conditie hoelang herhalen
    stap++;                 //aanpassen variabele
}

de kortere schrijfwijze
for(start ; conditie; aanpassing){}
for(let stap = 1; stap <= 20; stap++){
}
*/
let tafelVan = 3;
for(let stap = 1; stap <= 10; stap++){
    let result = stap * tafelVan;
    console.log(stap + " * " + tafelVan + " = " + result)
}

