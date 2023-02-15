var saudiRiyal = (+prompt("how many riyal's do you have ?"))



var dollar = (+prompt("how many dollar's do you have?"))


var SR_1 =  71.85 ;

var USD1 = 270.1774;

var pkrToSR = (`${saudiRiyal * SR_1}`) 
var pkrToUSD1 = (`${dollar * USD1}`) 

// alert(pkrToSR)
// alert(pkrToUSD1)


document.write(`you convert ${dollar}$ into PKR that is = ${pkrToUSD1} PKR . <br> `)

document.write(`you convert ${saudiRiyal}Riyals into PKR that is = ${pkrToSR}PKR.  <br> `)

document.write(` And the total amount is ${(saudiRiyal * SR_1) + (dollar * USD1)}.  <br> `)