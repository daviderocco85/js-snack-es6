// ===============================
// SNACK 1
// ===============================

const raceBikes = [
    {
        name: 'Atala',
        weightKg: 10 
    },

    {
        name: 'Bianchi',
        weightKg : 8  
    },

    {
        name: 'Rockrider',
        weightKg : 11  
    },

    {           
        name: 'Alpek',
        weightKg : 12 
    },

    {
        name: 'Olympia',
        weightKg : 9  
    }

];

let lightest = raceBikes[0];

// Ciclo for per controllare quale bici nell'array di oggetti racebikes pesa di meno
// i = 1 perché l’elemento 0 è già stato preso come riferimento.
// Il ciclo ora deve confrontare solo gli altri elementi.
for (let i = 1; i < raceBikes.length; i++) {
  if (raceBikes[i].weightKg < lightest.weightKg) lightest = raceBikes[i];
}
console.log(lightest);


// Soluzione alternativa con il ciclo for of
let smallest = raceBikes[0];

for (const bike of raceBikes) {
  if (bike.weightKg < smallest.weightKg) {
    smallest = bike;
  }
}

console.log(lightest);

// ===============================
// SNACK 2
// ===============================

const footballTeams = [

    {
         name: 'Atalanta',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Bologna',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Cagliari',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Como',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Fiorentina',
        'league points': 0,
        'fouls against': 0
    },

    { 
         name: 'Frosinone',
        'league points': 0,
        'fouls against': 0
    },
     
    {
         name: 'Genoa',
        'league points': 0,
        'fouls against': 0
    },
  
    {
         name: 'Inter',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Juventus',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Lazio',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Lecce',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Milan',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Monza',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Napoli',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Parma',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Roma',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Sassuolo',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Torino',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Udinese',
        'league points': 0,
        'fouls against': 0
    },

    {
         name: 'Venezia',
        'league points': 0,
        'fouls against': 0
    }



];

 // intervallo tra 0 e 114 che esprime il numero massimo 
 // di punti che una squadra può fare in 38 giornate.
/** Arrow function che genera numeri random per i punti fatti*/ 
const getRandomNumberPoints = () => Math.floor(Math.random() * 115);


// si stima che una squadra possa subire 
// almeno 100 falli nell'arco di una stagione
/**Arrow function che genera numeri random per i falli subiti*/
const getRandomNumberFouls = () => Math.floor(Math.random() * 1000) + 100;

// Ciclo for per aggiungere i numeri randomici all'array di oggetti footballTeams
for (let i = 0 ; i < footballTeams.length; i++){

    footballTeams[i]['league points'] = getRandomNumberPoints();
    footballTeams[i]['fouls against'] = getRandomNumberFouls();
   
}


// Creazione del nuovo array di oggetti con solo Nome squadra e falli subiti
const teamsNameAndFouls = [];

// Ciclo for che li aggiunge nell'array di oggetti teamsNameAndFouls 
for (let i = 0; i < footballTeams.length; i++) {
  teamsNameAndFouls.push({
    name: footballTeams[i].name,
    'fouls against': footballTeams[i]['fouls against']
  });
}

console.log(teamsNameAndFouls);