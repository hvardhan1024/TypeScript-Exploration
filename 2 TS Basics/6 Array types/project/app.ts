const person = {
  name:'harsha',
  age:21,
  hobbies: ['Sports','Cooking']
}

let favoriteActivities:string[];
// let favoriteActivities:any[];// To accept any data type
// favoriteActivities  = 'cooking' //Throws error
// favoriteActivities  = 12 //Throws error
favoriteActivities  = ['cooking']


for (const hobby of person.hobbies){ // Ts identifies hobbies as an array of strings
  console.log(hobby);
} // TS identifies hobby as a string

console.log(person.name);