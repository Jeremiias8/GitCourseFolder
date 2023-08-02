var movie = "Fast & Furious";
var serie = "FBI";
var lorem = "lorem ipsum dolor sit amet";
// operations
var programs = "My favourites programs are: " + movie + " y " + serie;
console.log(programs);
// template string
var programs2 = "My favourites programs are: ".concat(movie, " y ").concat(serie);
console.log(programs2);
var actual_age = 21;
var future_age = "\n    El pr\u00F3ximo a\u00F1o mi edad ser\u00E1 ".concat(actual_age + 1, "\n");
console.log(future_age);
// metods
console.log(programs2.charAt(0));
console.log(programs2.toUpperCase());
