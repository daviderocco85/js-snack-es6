// Snack 1
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



