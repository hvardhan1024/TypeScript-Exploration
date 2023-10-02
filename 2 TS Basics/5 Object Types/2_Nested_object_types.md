# Working with Nested Object Types in TypeScript

In TypeScript, you can define object types for nested objects. Here's how it works:

## Nested Object Types
Consider this JS Object:
```javascript
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
};
```

To create the type for such an object, it would look like this:

```typescript
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
}
```

In essence, you have an object type within another object type, allowing you to precisely describe the structure and types of deeply nested data. This helps TypeScript catch errors early and provides better type checking for your code.