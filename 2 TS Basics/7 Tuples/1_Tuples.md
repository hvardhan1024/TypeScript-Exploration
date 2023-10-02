# Understanding Tuple Types in TypeScript

- TypeScript introduces the concept of Tuple Types, which are not present in vanilla JavaScript.
- Tuples are like arrays but with a fixed length and fixed type for each element.
- They are especially useful when you need strict data structure enforcement.

## Creating a Tuple Type

- To define a tuple type, use square brackets `[]` with type annotations for each element.
- For example, `[number, string]` defines a tuple with exactly two elements: a number followed by a string.

```typescript
let personRole: [number, string];
```

## Enforcing Structure
- Tuple types enforce the structure of an array.
- TypeScript ensures that the array adheres to the defined structure.
```typescript
personRole = [2, 'author']; // Correct
personRole = ['author', 2]; // Error: Type 'string' is not assignable to type 'number'.
```

## Benefit of Tuples
- Tuples are useful when you need precise control over the type and length of an array.
- They provide strong type checking and improve code clarity.
- Pushing elements to a tuple is allowed, but TypeScript can't enforce the length in such cases.
```typescript
personRole.push(3, 'admin'); // Allowed, but TypeScript can't enforce the length here.

```

Tuples are particularly handy when you require an array with a fixed structure, making your code more predictable and maintainable.