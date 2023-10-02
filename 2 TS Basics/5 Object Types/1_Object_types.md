# Understanding Object Types in TypeScript

In TypeScript, object types are used to describe the structure and types of objects. Let's explore the concept of object types and how they work in TypeScript.

## Basics of Object Types

- In TypeScript, objects are defined using curly braces `{}` to enclose key-value pairs.
- Object types in TypeScript help specify the shape and types of properties within an object.

### Defining a Basic Object

- You can create a basic object like this:
  ```typescript
  let person: { name: string; age: number } = {
    name: "harsha",
    age: 30,
  };
- Here, person is an object with properties name (string) and age (number).
- The colon : is used to assign the type to each property.


### Object Type Inference
- TypeScript can often infer object types without explicit assignments:
```typescript
let person = {
  name: "harsha",
  age: 30,
};
```
- TypeScript infers that person has the same structure and types as the object being assigned to it.

### Type Checking with Object Types
- TypeScript performs type checking based on the defined object types.
- It helps catch errors during development when working with objects.

#### Type Checking with Object Types
- TypeScript ensures you access existing properties and reports errors for non-existent ones.
- Object types can be highly specific, defining exact shapes and property types.

#### Type Inference and Object Types
- TypeScript's type inference determines object types automatically.
- Explicit type assignments can be skipped when TypeScript infers types accurately.

#### Explicit Type Assignment
- Explicit type assignments are possible but usually unnecessary:
```typescript
let person: { name: string; age: number } = { name: "Max", age: 30 };
```

- TypeScript can infer types without explicit assignments:
```typescript
let person = { name: "Max", age: 30 };
```