import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*
M1: Getallen optellen
Maak een applicatie dat getallen aan de gebruiker vraagt
 en deze optelt bij elkaar zolang het ingegeven getal groter is dan 0. 
Van zodra de gebruiker een getal kleiner of gelijk aan 0 ingeeft 
print de applicatie de som af.
*/

let getal = 0;
let som = 0; 

do{
    som += getal;
    getal = parseFloat(await userInput.question('geef een getal'));
}while(getal > 0);
console.log(som);



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


/*M3: Priemgetal
Vraag een getal aan de gebruiker.
 Controleer of dit getal een priemgetal is of niet. 
 (Een getal is een priemgetal wanneer het enkel deelbaar is door 1 of door zichzelf) 
 */
//*
 let isHetEenPriemGetal = parseFloat( await userInput.question('Kies een getal'))
 let deler = 2;
 let aantalDelers = 0;

 while(deler < isHetEenPriemGetal){
    if(isHetEenPriemGetal % deler == 0){
        aantalDelers++;
    }
    deler++
 }

 if(aantalDelers > 0 ){
    console.log("geen priemgetal");
 }else{
    console.log('Het is wel een priemgetal, proficiat');
 }
//*/

/*
 let isHetEenPriemGetal = parseFloat( await userInput.question('Kies een getal'))
 let deler = 2;

 while(deler < isHetEenPriemGetal){
    if(isHetEenPriemGetal % deler == 0){
        console.log('geen priemgetal');
        break;
    }
    deler++
 }
//*/




/*M4: FizzBuzz
Maak een applicatie dat alle getallen tussen 1 en 100 print. 
Maar voor getallen deelbaar door 3 print je "Fizz" af, 
voor getallen deelbaar door 5 print je "Buzz" af 
en voor getallen deelbaar door 3 en 5 print je "FizzBuzz" af. 

1- loop alle getallen van 1 tot 100

for(let i = 1; i <= 100; i++){
    console.log(i)
}

2- alle condities afgaan dus is iets deelbaar
*/


/*
let getal = 1;
while(getal <= 100){

    let isDeelbaarDoorDrie = (getal % 3 == 0);
    let isDeelBaarDoorVijf = (getal % 5 == 0);

    if(isDeelbaarDoorDrie && isDeelBaarDoorVijf){
        console.log(" FizzBuzz");
    }else if(isDeelBaarDoorVijf){
        console.log(" Buzz");
    }else if(isDeelbaarDoorDrie){
        console.log(" Fizz");
    }else{
        console.log(getal);
    }
    
    getal++;
}
//*/

process.exit()