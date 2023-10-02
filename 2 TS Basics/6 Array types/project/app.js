var person = {
    name: 'harsha',
    age: 21,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
// let favoriteActivities:any[];// To accept any data type
// favoriteActivities  = 'cooking' //Throws error
// favoriteActivities  = 12 //Throws error
favoriteActivities = ['cooking'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) { // Ts identifies hobbies as an array of strings
    var hobby = _a[_i];
    console.log(hobby);
} // TS identifies hobby as a string
console.log(person.name);
