for(let rij = 1 ; rij <= 3; rij++){
    let tekstVoorDeRij = "";
    for(let kolom = 1; kolom <= 4; kolom++){
        tekstVoorDeRij += (rij * kolom) + " ";
    }
    console.log(tekstVoorDeRij);
}

for(let rij = 1 ; rij <= 3; rij++){
    let tekstVoorDeRij = "";
    let getal = 0;
    for(let kolom = 1; kolom <= 4; kolom++){
        getal += rij;
        tekstVoorDeRij += getal + " ";
    }
    console.log(tekstVoorDeRij);
}


//for(let rij = 1 ; rij <= 3; rij++){
let rij = 1;
do{
    let tekstVoorDeRij = "";

    let kolom = 1;
    do{
        tekstVoorDeRij += (rij * kolom) + " ";
        kolom++;
    }while(kolom <= 4);

    console.log(tekstVoorDeRij);
    rij++;
}while(rij <= 3)