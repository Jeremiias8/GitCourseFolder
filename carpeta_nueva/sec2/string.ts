let movie: String = "Fast & Furious";
let serie: String = "FBI";
let lorem: String = "lorem ipsum dolor sit amet";

// operations
let programs: String = "My favourites programs are: " + movie + " y " + serie;

console.log(programs);

// template string

let programs2: String = `My favourites programs are: ${movie} y ${serie}`

console.log(programs2);

let actual_age = 21;
let future_age: String = `
    El próximo año mi edad será ${actual_age + 1}
`

console.log(future_age);

// metods

console.log(programs2.charAt(0));
console.log(programs2.toUpperCase());