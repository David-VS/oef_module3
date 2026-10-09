import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/**
 * H1: Sterrenpiramide uitbreiden
We gaan de sterrenpiramide uit M2 aanpassen. 
Zorg ervoor dat er nu in plaats van een piramide een diamand te 
voorschijn komt, dus bijvoorbeeld als hoogte gelijk is aan 5 komt 
er dit tevoorschijn:
 */

let hoogte = parseFloat(await userInput.question('geef de hoogte voor je ruit'));
let midden = 0;

//bepaal het midden, voor even aantallen zijn er twee volle rijen in het midden
let isEven = hoogte % 2 == 0;
if (isEven) {
    midden = hoogte / 2;
} else {
    midden = (hoogte + 1) / 2;
}

//tel het aantal rijen
for (let i = 1; i <= hoogte; i++) {
    
    //je moet weten waar het midden voor de rij is voor het aantal sterren
    //teken spaties tot je het midden bereikt, daarna teken je sterren
    //is je rij nog niet aan het midden, bij hoogte vijf dus rij 1, 2 en 3
    //dan bepaal je aan de hand daarvan hoeveel sterren op die rij moeten
    let sterren = 0;
    //even aantal rijen heeft iets ander midden dan oneven aantal rijen
    if (i <= midden) {
        sterren = 2 * i - 1;
    } else {
        sterren = 2 * (hoogte - i) + 1;
    }

    //tel vervolgens het aantal spaties tot aan het midden, 
    //het midden van bv hoogte 5 voor de bovenste rij is 3, je tekent dus twee spaties en op positie drie een ster
    //de rij eronder teken je een spatie, voor positie 2, 3 en 4 een ster
    //... 
    let spaties = 0;
    if (i <= midden) {
        spaties = midden - i;
    } else {
        //heel dwaas, bij een even aantal verdubbelt de middelste rij, 
        // anders zou alles vreemd opschuiven
        if(isEven){
            spaties = i - midden -1;
        }else{
            spaties = i - midden;
        }
    }
    let lijn = "";

    //na het aantal spaties en sterren te tellen voor de huidige rij kan je deze afdrukken
    for (let j = 0; j < spaties; j++) {
        lijn += " ";
    }
    for (let j = 0; j < sterren; j++) {
        lijn += "*";
    }

    console.log(lijn);
}

/*
H2: Lopende gemiddelde
Schrijf een script dat aan de gebruiker vraagt om een getal in te geven. 
Het script zal gemiddelde van de ingegeven getallen bijhouden en 
telkens afdrukken. 
Het script stopt wanneer de het gemiddelde boven 25 gaat. 
*/

let aantalInvoeren = 0;
let sum = 0;
let rollingAverage = 0;

do{
    let input = parseFloat(await userInput.question('geef een getal'));
    sum += input;
    aantalInvoeren++;
    rollingAverage = sum / aantalInvoeren;
    console.log(rollingAverage);
}while(rollingAverage <= 25);

process.exit()