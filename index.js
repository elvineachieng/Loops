/*while (condition) {
 // code that gets executed as long as the condition is true
}*/
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
 if (someArray[0] === "Louiza") {
 console.log("Found her!");
 notFound = false;
 } else {
 someArray.shift();
 }
}
let nr1=0;
let nr2=2;
let temp;
let fibonacciArray = [];
while(fibonacciArray.length < 25){
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}
console.log(fibonacciArray);