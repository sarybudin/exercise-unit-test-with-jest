console.log("Hello World");
let sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(montodolar){
    return (montodolar*(oneEuroIs.JPY/oneEuroIs.USD));
}
console.log(fromDollarToYen(12));

function fromEuroToDollar(montoeuro){
    return Math.floor(montoeuro*oneEuroIs.USD);
}
console.log(fromEuroToDollar(15));

function fromYanToPound (montoyen){
    return Math.floor(montoyen*(oneEuroIs.GBP/oneEuroIs.JPY));
}
console.log(fromYanToPound(1500));
module.exports = {sum,fromDollarToYen,fromEuroToDollar,fromYanToPound};
