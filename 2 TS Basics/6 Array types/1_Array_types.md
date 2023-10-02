# Working with Arrays in TypeScript

Arrays are a fundamental data type in JavaScript, and TypeScript offers robust support for them. Here's how you work with arrays in TypeScript:

## Creating Arrays

- In TypeScript, you create arrays using square brackets `[]`.
- You can store various data types in arrays, including numbers, strings, booleans, objects, or even nested arrays.

```typescript
const hobbies: string[] = ['sports', 'cooking'];
```


## Type Inference
- TypeScript can automatically determine the type of a variable based on its initial value.
- It correctly infers the array's type based on the data you provide.

```typescript
const person = {
  hobbies: ['sports', 'cooking']
};
```

## Explicit Type Assignment
- You can explicitly assign types to variables.
- This helps ensure type safety.
```typescript
const favoriteActivities: string[] = [];
```

## Type Safety
- TypeScript enforces type safety for arrays.
- It prevents you from storing incompatible values in an array, catching errors at compile time.
```typescript
const hobbies: string[] = ['sports', 'cooking'];
hobbies.push(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'.
```

## Array Operations 
- TypeScript provides intelligent code completion for arrays based on their declared type.
- This prevents runtime errors by catching type-related issues at compile time.
```typescript
const hobbies: string[] = ['sports', 'cooking'];
for (const hobby of hobbies) {
  console.log(hobby.toUpperCase()); // TypeScript offers string methods, ensuring type safety.
}
```