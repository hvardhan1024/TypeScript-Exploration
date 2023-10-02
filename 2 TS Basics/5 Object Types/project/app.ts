// #1
// const person = { //TS infers this object
//   name:"harsha",
//   age:21
// } // TS object different from JS object
// console.log(person);
// console.log(person.nickname); // error since no nickname is available



// #2
// const person:object = {
//   name:"harsha",
//   age:21
// } 
// console.log(person.name);// this still gives warning even after mentioning that person is an object



// #3
const person:{
  name:string,
  age:number
} = { //{} does not create a new JS object - its just TS notation
  name:"harsha",
  age:21
} 
console.log(person.name);// this still gives warning even after mentioning that person is an object