// #1
// const person = {
//   name:'harsha',
//   age:21,
//   hobbies: ['Sports','Cooking'],
//   role: [2,'author'] //Ts infers this as an array which can either contain a number or a string
// }
// person.role.push('admin');
// person.role[1]=10;
// #2
var person = {
    name: 'harsha',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] //Ts infers this as an array which can either contain a number or a string
};
// person.role[1]=10; //gives error
person.role.push('admin'); // push is an exception that is accepted in TS
console.log(person);
