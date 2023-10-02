# Understanding Enum Types in TypeScript

- Enum types are a feature in TypeScript to represent a set of named constants.
- They help assign human-readable labels to numeric or string values.
- Enum values are essentially translated to numbers starting at zero.

## Creating an Enum

- To create an enum, use the `enum` keyword followed by a list of identifiers.
- Enum identifiers are named constants, typically in uppercase.

```typescript
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}
```

## Using Enum Values
- Enum values can be accessed using the dot notation.
- They provide a cleaner and more readable way to work with constants.
```typescript
let userRole = Role.ADMIN;
if (userRole === Role.AUTHOR) {
  console.log('User is an author.');
}
```

## Customizing Enum Values
- By default, enums start with values assigned to zero and increment.
- You can customize the values by assigning them manually.
```typescript
enum CustomRole {
  ADMIN = 5,
  READ_ONLY,   // 6
  AUTHOR       // 7
}
```

- Enum types can contain mixed types such as numbers, strings, or both.
```typescript 
enum CustomType {
  VALUE1 = 1,
  VALUE2 = 'string',
  VALUE3 = 3
}
```

- Enums provide a convenient way to manage constants and improve code clarity.