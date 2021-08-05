// create kelvin constant so it does not change
const kelvin = 293;

// create celcius variable; c = k-273
let celcius = kelvin - 273;

// create fahrenheit variable; Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = Math.floor(celcius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
