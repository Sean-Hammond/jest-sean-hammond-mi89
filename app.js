

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (dollars) => {
    let valueInYen = dollars * ( 1.07 / 156.5 );
    return valueInYen;
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(euro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = euro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromYenToPound = (yen) => {
    let valueInPounds = yen * (.87 / 156.5 );
    return valueInPounds;
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }