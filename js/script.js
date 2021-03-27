// -----------------------------------------------------SNACK 1-------------------------------


// Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

function snack1(){

    const bikes = [

        {
            'nome': 'bici1',
            'peso': 10,
        },
        {
            'nome': 'bici2',
            'peso': 8,
        },
        {
            'nome': 'bici3',
            'peso': 11,
        },
        {
            'nome': 'bici4',
            'peso': 5,
        }
    ];


    let smallBike = {
        'nome': '',
        'peso': Number.MAX_SAFE_INTEGER
    };

    for (let i=0;i<bikes.length;i++) {

        const bike = bikes[i];
        const {peso} = bike;

        if (peso < smallBike.peso) {

            smallBike = bike;
        }
    }
    console.log(smallBike);

}


// ----------------------------------------------- SNACK 2------------------------------
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare,
// le altre saranno tutte settate a 0.


function getRandom(min, max){

    let localMin = min;
    let localMax = max - min + 1;

    return Math.floor(Math.random() * localMax) + localMin;
}

function snack2(){

    let teams = [
        {
            'nome': 'squadra1',
            'puntiFatti':0,
            'puntiSubiti':0
        },
        {
            'nome': 'squadra2',
            'puntiFatti':0,
            'puntiSubiti':0
        },
        {
            'nome': 'squadra3',
            'puntiFatti':0,
            'puntiSubiti':0
        },
        {
            'nome': 'squadra4',
            'puntiFatti':0,
            'puntiSubiti':0
        }
    ];

    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti
    for(let i=0;i<teams.length;i++){

        let rnd = getRandom(1, 100);
        var oneTeam = teams[i];
        oneTeam['puntiFatti'] = rnd;
        rnd = getRandom(1, 100);
        oneTeam['puntiSubiti'] = rnd;
    }

    // Usando la destrutturazione creiamo un nuovo array
    // i cui elementi contengono solo nomi e falli subiti
    // e stampiamo tutto in console.
    const newArr = [];
    for(let i=0;i<teams.length;i++){

        const oneTeam = teams[i];
        let {puntiFatti, puntiSubiti} = oneTeam;

        let resObj = {puntiFatti, puntiSubiti};
        newArr.push(resObj);
    }
    console.log(teams, newArr);
}


function init(){
    // snack1();
    snack2();
}

// JQUERY
$(document).ready(init);
