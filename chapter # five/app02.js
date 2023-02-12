
// ----------question number six-----

// =======the temp convertor=========


// var fahrenheit = Number(prompt("What is Fahrenheit.??"));

// var celsius = Number(prompt("What is Celsius.??"));

// var cTempToF = (celsius * 9 / 5) + 32;

// var fTempToC = (fahrenheit - 32) * 5 / 9;

// document.write(`${cTempToF}C is ${fTempToC}F <br>`)

// document.write(`${fTempToC}F is ${cTempToF}C <br>`);

alert("salam! 0 celsiuce is  = 32 fahrenheit.\n0 fahrenheit is = -17.77celsiuse")


// -------------calling the value of asking celsius to convert into fahrenheit==========
var cel = (prompt(`what celsius do you want to convert into fahrenheit?`));

// -------------calling the value of asking farenheit to convert into calsies==========

var fahen = (prompt(`what fahrenheit do you want to convert into celsius`))

// convert farhenheit into celsies
var convertIntoCelsius = (fahen -32) * 5 / 9; 

// convert celsies into farhenheit
var convertIntoFahrenheit =  ( cel * 9 / 5) + 32 ;


alert( `${cel}F is equal to ${convertIntoFahrenheit}C`);


document.write(`${cel}F is ${convertIntoFahrenheit}C <br>`)


document.write( `${fahen}F is equal to ${convertIntoCelsius}C <br>`);


alert(`${fahen}F is equal to ${convertIntoCelsius}C`)