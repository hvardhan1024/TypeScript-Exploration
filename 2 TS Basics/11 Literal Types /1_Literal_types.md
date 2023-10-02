# Understanding Literal Types in TypeScript

- Literal types specify exact values for variables or parameters.
- They are used when you need to be very specific about the allowed values.

```typescript
let myValue: "as-number" | "as-text"; // Only accepts "as-number" or "as-text"
```

- Literal types are based on core types (e.g., string or number) with specific values.
- They provide enhanced type safety by restricting possible values.

## Use Cases for Literal Types
- When you want to limit a variable or parameter to specific values.
- Useful when working with union types to specify exact options.

```typescript
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text"
): number | string {
    // Logic based on resultConversion value
    // Ensures only "as-number" or "as-text" is allowed.
}
```

- Literal types improve code clarity and prevent typos or incorrect values.
- Enhance type safety by narrowing down possible options.

Literal types in TypeScript help ensure that your code is more precise and less error-prone.