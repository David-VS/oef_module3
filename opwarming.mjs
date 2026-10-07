import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//while -> eerst uw controle, dan eventueel uitvoeren
let budget = 50;
let uitgave = parseFloat( await userInput.question('wat is de volgende uitgave? '));


while(budget - uitgave >= 0){
    budget -= uitgave;
    uitgave = parseFloat( await userInput.question('wat is de volgende uitgave? '));
}
console.log("klaar met while")


//do while -> eerst uivoeren, dan controle
budget = 50;
uitgave = parseFloat( await userInput.question('wat is de volgende uitgave? '));

do{
    budget -= uitgave;
    uitgave = parseFloat( await userInput.question('wat is de volgende uitgave? '));
}while(budget - uitgave >= 0);
console.log("klaar met do while")