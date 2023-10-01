# TypeScript Type Assignment and Inference

- In TypeScript, you often work with core types like `number`, `boolean`, and `string`.
- Type assignment is achieved by adding a colon (`:`) after a variable or parameter name, followed by the type name (e.g., `number`, `boolean`, `string`).
- This type assignment syntax is specific to TypeScript and not part of the JavaScript language.

## Type Assignment Example

- When declaring function parameters or variables, TypeScript allows you to explicitly assign their types. For example:
  - `function add(n1: number, n2: number, showResult: boolean, phrase: string): number { ... }`

## Type Inference

- TypeScript features type inference, which allows it to automatically determine variable types based on their initialization.
- For instance, if you initialize a constant with a numeric value, TypeScript infers that the type is `number`. Constants are type-specific and cannot be reassigned.
- Type inference is especially useful for improving code readability and reducing redundancy.

## Type Inference Example

- TypeScript infers types without explicit assignment when it's evident. For instance:
  - `const number1 = 5;` automatically infers `number` type for `number1`.
  - `const resultPhrase = 'Result is: ';` automatically infers `string` type for `resultPhrase`.

## Manual Type Assignment vs. Type Inference

- In most cases, you don't need to manually assign types when TypeScript can infer them correctly.
- However, manually assigning types can be helpful when a variable is initially unassigned (e.g., using `let`) to prevent unintended type changes later in your code.

## Type Safety

- TypeScript enforces type safety by checking that variables, parameters, and return values adhere to their assigned types.
- TypeScript catches type-related errors during development, helping you write more reliable code.

## Benefits of TypeScript

- TypeScript's type system enhances code clarity and safety, especially in large codebases.
- Type inference reduces manual type assignment, making code cleaner and more maintainable.
