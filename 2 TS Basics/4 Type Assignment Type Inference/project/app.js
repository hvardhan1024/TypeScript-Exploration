function add(n1, n2, showResult, phrase) {
    //   console.log(typeof n1);
    //   if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect input!");
    //   }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; //5.0 all ints are floats by default
var number2;
number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
