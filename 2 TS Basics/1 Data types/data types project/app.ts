// function add(n1,n2){
//     return n1+n2;
// }

// const number1 = '5'; //concatenation is done
// const number2 = 2.8;

// const result = add(number1,number2);

// console.log(result);




// ts way 
function add(n1:number,n2:number){
    return n1+n2;
}

// const number1 = '5'; //gives error
const number1 = 5;
const number2 = 2.8;

const result = add(number1,number2);

console.log(result);

// TS type system only helps during development (i.e before the code gets compiled)