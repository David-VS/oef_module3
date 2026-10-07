import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
/*M2
Gebruik een variabele hoogte. 
We gaan aan de hand van hoogte een sterrenpiramide bouwen. 
Per laag van de piramide komt er een ster bij. 
Dus bijvoorbeeld als hoogte gelijk is aan 4 zal de afgedrukte piramide er zo uit zien
*
**
***
**** 
1 -vraag hoogte V
2 -tel rijen    V
3 -tel per rij aantal sterren  V
4 -print elke rij     V
*/

let hoogte = parseFloat( await userInput.question('Geef een hoogte in: '));

for(let rij = 1; rij <= hoogte; rij++){
    let lijnSterren = '';

    for(let kolom = 1; kolom <= rij; kolom++){
        //console.log(`rij ${rij} kolom ${kolom}`)
        lijnSterren += '*' 
    }
    console.log(lijnSterren) ;
}

process.exit()