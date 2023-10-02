// const person :{
//   name:string,
//   age:number,
//   hobbies:string[];
//   role:[number,string];
// }= {
//   name:'harsha',
//   age:21,
//   hobbies: ['Sports','Cooking'],
//   role: [2,'author'] //Ts infers this as an array which can either contain a number or a string
// }



// const ADMIN =0;
// const READ_ONLY =1;
// const AUTHOR = 2;
// const person = {
//   name:'harsha',
//   age:21,
//   hobbies: ['Sports','Cooking'],
//   role: ADMIN
// }
// console.log(person);
// if(person.role === ADMIN){
//   console.log('is read only');
// }


enum Role{ ADMIN=1,READ_ONLY='ro',AUTHOR=10};

const person = {
  name:'harsha',
  age:21,
  hobbies: ['Sports','Cooking'],
  role: Role.ADMIN
}
console.log(person);
if(person.role === Role.ADMIN){
  console.log('is read only');
}

console.log(Role.READ_ONLY);