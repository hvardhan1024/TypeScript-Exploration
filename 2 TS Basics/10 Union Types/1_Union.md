# Understanding Union Types in TypeScript

- Union types allow you to accept multiple data types for a variable or parameter.
- They are denoted by using the `|` symbol between types.

```typescript
let value: number | string; // Can hold either a number or a string
```

- Union types provide flexibility in handling different data types.
- However, TypeScript may require type checks when using union types.

## Use Cases for Union Types
- When you need to work with multiple data types in a single variable or function parameter.
- Useful when you want different behavior based on the type received.
```typescript
function combine(input1: number | string, input2: number | string): number | string {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2; // Numeric addition
    } else {
        return input1.toString() + input2.toString(); // String concatenation
    }
}
```
- Union types make your code more flexible and versatile.

## Handling Union Types
- Use runtime type checks (typeof) when necessary to differentiate between types.
- TypeScript ensures type safety, but type checks help TypeScript understand your intentions.

Union types allow you to work with multiple types in a single variable, enhancing the adaptability of your TypeScript code.
